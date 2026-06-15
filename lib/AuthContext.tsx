"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from "react";

const BILLING_API = "https://api.kindreply.co";
const KINDREPLY_API = "https://api.kindreply.co";

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  role?: string;
}

export interface Subscription {
  status: string;
  plan_id: string;
  plan_name?: string;
  current_period_end: number | string;
  cancel_at_period_end: boolean;
}

export type PaymentSyncStatus =
  | "idle"
  | "syncing"
  | "synced"
  | "timeout";

interface AuthContextType {
  user: User | null;
  token: string | null;
  subscription: Subscription | null;
  isPro: boolean;
  isLoading: boolean;
  error: string | null;
  creditsBalance: number | null;
  mounted: boolean;
  paymentSyncStatus: PaymentSyncStatus;
  paymentSyncMessage: string | null;
  logout: () => void;
  getLoginUrl: () => string;
  fetchCredits: () => Promise<number | null>;
  refreshCredits: () => void;
  syncCreditsAfterPayment: (beforeBalance: number) => void;
  clearPaymentSyncStatus: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [creditsBalance, setCreditsBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted] = useState(true);
  const [paymentSyncStatus, setPaymentSyncStatus] = useState<PaymentSyncStatus>("idle");
  const [paymentSyncMessage, setPaymentSyncMessage] = useState<string | null>(null);
  const pollTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const syncAbortRef = useRef(false);

  const isPro = subscription?.status === 'active';
  const storedUserId = useMemo(() => user?.id ?? null, [user?.id]);

  // 1. 页面加载时：从 localStorage 读取登录态
  useEffect(() => {
    queueMicrotask(() => {
      try {
        const storedUser = localStorage.getItem("kindreply_user");
        const storedToken = localStorage.getItem("kindreply_token");
        const storedSub = localStorage.getItem("kindreply_subscription");
        const storedCredits = localStorage.getItem("kindreply_credits");
        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedToken) setToken(storedToken);
        if (storedSub) setSubscription(JSON.parse(storedSub));
        if (storedCredits) setCreditsBalance(Number(storedCredits));
      } catch {
        // ignore parse errors
      }
    });
  }, []);

  // 从 localStorage 实时读取 user id
  // Fetch credits from API - 返回最新 balance
  const fetchCredits = useCallback(async (userId?: string | null): Promise<number | null> => {
    const targetUserId = userId ?? storedUserId;

    if (!targetUserId) {
      setCreditsBalance(null);
      return null;
    }

    try {
      const res = await fetch(`${KINDREPLY_API}/credits?ts=${Date.now()}`, {
        cache: "no-store",
        headers: { "X-User-ID": targetUserId },
      });
      if (res.ok) {
        const data = await res.json() as { balance?: number; credits_balance?: number; credits_remaining?: number };
        const newBalance = data.credits_balance ?? data.credits_remaining ?? data.balance ?? null;
        console.log('[credits:fetch] new balance =', newBalance);
        setCreditsBalance(newBalance);
        if (newBalance !== null) {
          localStorage.setItem("kindreply_credits", String(newBalance));
          window.dispatchEvent(new CustomEvent("kindreply:credits-updated", { detail: { balance: newBalance } }));
        }
        return newBalance;
      }
    } catch (err) {
      console.error('[credits:fetch] failed:', err);
    }
    return null;
  }, [storedUserId]);

  // 用户变化时自动获取 credits
  useEffect(() => {
    if (!storedUserId) return;
    queueMicrotask(() => {
      void fetchCredits(storedUserId);
    });
  }, [storedUserId, fetchCredits]);

  // 监听跨标签页 credits 刷新信号 + 自定义事件
  useEffect(() => {
    const storageHandler = (e: StorageEvent) => {
      if (e.key === "kindreply_refresh_credits") {
        console.log('[credits] received refresh signal from another tab');
        fetchCredits();
      }
      if (e.key === "kindreply_credits" && e.newValue) {
        setCreditsBalance(Number(e.newValue));
      }
      if (e.key === "kindreply_user") {
        if (e.newValue) {
          try { setUser(JSON.parse(e.newValue)); } catch { setUser(null); }
        } else {
          setUser(null);
        }
      }
      if (e.key === "kindreply_token") setToken(e.newValue);
      if (e.key === "kindreply_subscription") {
        if (e.newValue) {
          try { setSubscription(JSON.parse(e.newValue)); } catch { setSubscription(null); }
        } else {
          setSubscription(null);
        }
      }
    };

    const customEventHandler = (e: CustomEvent) => {
      const balance = e.detail?.balance;
      if (typeof balance === 'number') {
        console.log('[credits] received custom event, balance =', balance);
        setCreditsBalance(balance);
      }
    };

    window.addEventListener("storage", storageHandler);
    window.addEventListener("kindreply:credits-updated", customEventHandler as EventListener);
    return () => {
      window.removeEventListener("storage", storageHandler);
      window.removeEventListener("kindreply:credits-updated", customEventHandler as EventListener);
    };
  }, [fetchCredits]);

  // Fetch subscription from Billing Worker
  const fetchSubscription = useCallback(async (userId: string, authToken: string) => {
    try {
      const res = await fetch(`${BILLING_API}/api/auth/session`, {
        headers: { "Authorization": `Bearer ${authToken}` },
      });
      if (res.ok) {
        const data = await res.json() as { subscription?: Subscription };
        if (data.subscription) {
          setSubscription(data.subscription);
          localStorage.setItem("kindreply_subscription", JSON.stringify(data.subscription));
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // 3. 检测 URL 中的 auth_token（OAuth 回跳后）
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const authToken = url.searchParams.get("auth_token");
    if (!authToken) return;
    url.searchParams.delete("auth_token");
    window.history.replaceState({}, "", url.toString());
    if (!authToken.startsWith("handoff_")) {
      queueMicrotask(() => setError("Invalid auth token format"));
      return;
    }
    queueMicrotask(() => {
      setIsLoading(true);
      setError(null);
    });
    fetch(`${KINDREPLY_API}/api/auth/exchange`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: authToken }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || `Exchange failed: ${res.status}`);
        }
        return res.json() as Promise<{ user: User; token: string }>;
      })
      .then((data) => {
        localStorage.setItem("kindreply_user", JSON.stringify(data.user));
        localStorage.setItem("kindreply_token", data.token);
        setUser(data.user);
        setToken(data.token);
        fetchSubscription(data.user.id, data.token);
      })
      .catch((err) => {
        console.error("Auth handoff failed:", err);
        setError(err.message || "Authentication failed");
      })
      .finally(() => setIsLoading(false));
  }, [fetchSubscription]);

  const clearPaymentSyncStatus = useCallback(() => {
    setPaymentSyncStatus("idle");
    setPaymentSyncMessage(null);
    syncAbortRef.current = true;
    pollTimersRef.current.forEach(clearTimeout);
    pollTimersRef.current = [];
  }, []);

  // 5. 登出
  const logout = useCallback(() => {
    localStorage.removeItem("kindreply_user");
    localStorage.removeItem("kindreply_token");
    localStorage.removeItem("kindreply_subscription");
    localStorage.removeItem("kindreply_credits");
    setUser(null);
    setToken(null);
    setSubscription(null);
    setCreditsBalance(null);
    setError(null);
    clearPaymentSyncStatus();
  }, [clearPaymentSyncStatus]);

  // 6. 获取登录 URL
  const getLoginUrl = useCallback(() => {
    if (typeof window === "undefined") return `${BILLING_API}/api/auth/google`;
    const returnUrl = window.location.href;
    return `${BILLING_API}/api/auth/google?returnUrl=${encodeURIComponent(returnUrl)}`;
  }, []);

  // refreshCredits - 触发全局刷新，带轮询机制处理 webhook 延迟
  const refreshCredits = useCallback(() => {
    console.log('[credits] triggering global refresh with polling');
    syncAbortRef.current = false;
    pollTimersRef.current.forEach(clearTimeout);
    pollTimersRef.current = [];

    const pollIntervals = [0, 1000, 3000, 5000]; // 立即、1秒、3秒、5秒

    pollIntervals.forEach((delay) => {
      const timer = setTimeout(() => {
        if (!syncAbortRef.current) fetchCredits();
      }, delay);
      pollTimersRef.current.push(timer);
    });

    // 通过 localStorage 通知其他标签页
    localStorage.setItem("kindreply_refresh_credits", Date.now().toString());
    setTimeout(() => {
      localStorage.removeItem("kindreply_refresh_credits");
    }, 100);
  }, [fetchCredits]);

  // syncCreditsAfterPayment - 支付成功后的长轮询，检测余额变化
  const syncCreditsAfterPayment = useCallback((beforeBalance: number) => {
    console.log('[credits:sync] starting payment sync, beforeBalance =', beforeBalance);
    syncAbortRef.current = false;
    pollTimersRef.current.forEach(clearTimeout);
    pollTimersRef.current = [];

    setPaymentSyncStatus("syncing");
    setPaymentSyncMessage("Payment received. Updating credits…");

    const pollIntervals = [0, 2000, 5000, 10000, 15000, 20000]; // 0/2/5/10/15/20
    let completed = false;

    const runPoll = async (delayIndex: number, delayMs: number) => {
      const timer = setTimeout(async () => {
        if (syncAbortRef.current || completed) return;

        const latestBalance = await fetchCredits();
        console.log(`[credits:sync] poll #${delayIndex} at ${delayMs}ms, latestBalance =`, latestBalance);

        if (latestBalance !== null && latestBalance > beforeBalance) {
          completed = true;
          // 立即停止所有后续轮询
          pollTimersRef.current.forEach(clearTimeout);
          pollTimersRef.current = [];
          console.log('[credits:sync] success, stopping polls');
          setPaymentSyncStatus("synced");
          setPaymentSyncMessage(`Credits updated: ${latestBalance} (+${latestBalance - beforeBalance})`);
          // 3秒后自动隐藏提示
          const hideTimer = setTimeout(() => {
            setPaymentSyncStatus("idle");
            setPaymentSyncMessage(null);
          }, 3000);
          pollTimersRef.current.push(hideTimer);
          return;
        }

        // 如果是最后一次轮询仍未变化
        if (delayIndex === pollIntervals.length - 1 && !completed) {
          setPaymentSyncStatus("timeout");
          setPaymentSyncMessage("Payment succeeded. Credits may take a moment. Refresh if needed.");
        }
      }, delayMs);
      pollTimersRef.current.push(timer);
    };

    pollIntervals.forEach((delay, index) => runPoll(index, delay));

    // 通过 localStorage 通知其他标签页
    localStorage.setItem("kindreply_refresh_credits", Date.now().toString());
    setTimeout(() => {
      localStorage.removeItem("kindreply_refresh_credits");
    }, 100);
  }, [fetchCredits]);

  const value: AuthContextType = {
    user,
    token,
    subscription,
    isPro,
    isLoading,
    error,
    creditsBalance,
    mounted,
    paymentSyncStatus,
    paymentSyncMessage,
    logout,
    getLoginUrl,
    fetchCredits,
    refreshCredits,
    syncCreditsAfterPayment,
    clearPaymentSyncStatus,
    isLoggedIn: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
