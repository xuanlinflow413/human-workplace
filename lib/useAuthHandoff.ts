"use client";

import { useState, useEffect, useCallback } from "react";

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

export function useAuthHandoff() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted] = useState(true);
  // 全局 credits 状态 - 所有组件共享
  const [creditsBalance, setCreditsBalance] = useState<number | null>(null);

  // Check if user has active Pro subscription - ONLY check status === 'active'
  const isPro = subscription?.status === 'active';

  // 1. 页面加载时：从 localStorage 读取登录态
  useEffect(() => {
    queueMicrotask(() => {
      try {
        const storedUser = localStorage.getItem("kindreply_user");
        const storedToken = localStorage.getItem("kindreply_token");
        const storedSub = localStorage.getItem("kindreply_subscription");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        if (storedToken) {
          setToken(storedToken);
        }
        if (storedSub) {
          setSubscription(JSON.parse(storedSub));
        }
      } catch {
        // ignore parse errors
      }
    });
  }, []);

  // Fetch credits from API
  const fetchCredits = useCallback(async (userId?: string) => {
    const targetUserId = userId || user?.id;
    if (!targetUserId) {
      setCreditsBalance(null);
      return;
    }
    try {
      const res = await fetch(`${KINDREPLY_API}/credits?t=${Date.now()}`, {
        headers: { 
          "X-User-ID": targetUserId,
        },
      });
      if (res.ok) {
        const data = await res.json() as { balance?: number; credits_balance?: number; credits_remaining?: number };
        const newBalance = data.credits_balance ?? data.credits_remaining ?? data.balance ?? null;
        console.log('[credits:fetch] new balance =', newBalance);
        setCreditsBalance(newBalance);
        // 同时写入 localStorage 供其他标签页同步
        if (newBalance !== null) {
          localStorage.setItem("kindreply_credits", String(newBalance));
        }
      }
    } catch {
      // ignore
    }
  }, [user]);

  // 页面加载时读取缓存的 credits
  // 用户变化时自动获取 credits
  useEffect(() => {
    if (!user?.id) return;
    queueMicrotask(() => {
      void fetchCredits(user.id);
    });
  }, [user?.id, fetchCredits]);

  // 监听跨标签页 credits 刷新信号
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === "kindreply_refresh_credits") {
        // 收到刷新信号，重新获取 credits
        console.log('[credits] received refresh signal');
        fetchCredits();
      }
      if (e.key === "kindreply_credits") {
        // credits 数值变化
        if (e.newValue) {
          setCreditsBalance(Number(e.newValue));
        }
      }
      if (e.key === "kindreply_user") {
        if (e.newValue) {
          try {
            setUser(JSON.parse(e.newValue));
          } catch {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      }
      if (e.key === "kindreply_token") {
        setToken(e.newValue);
      }
      if (e.key === "kindreply_subscription") {
        if (e.newValue) {
          try {
            setSubscription(JSON.parse(e.newValue));
          } catch {
            setSubscription(null);
          }
        } else {
          setSubscription(null);
        }
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, [fetchCredits]);

  // Fetch subscription from Billing Worker
  const fetchSubscription = useCallback(async (userId: string, authToken: string) => {
    try {
      const res = await fetch(`${BILLING_API}/api/auth/session`, {
        headers: {
          "Authorization": `Bearer ${authToken}`,
        },
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

    // 立即从 URL 中移除 auth_token（防止刷新时重复提交）
    url.searchParams.delete("auth_token");
    window.history.replaceState({}, "", url.toString());

    // 验证 token 格式
    if (!authToken.startsWith("handoff_")) {
      queueMicrotask(() => setError("Invalid auth token format"));
      return;
    }

    queueMicrotask(() => {
      setIsLoading(true);
      setError(null);
    });

    // 4. 通过 kindreply-api 代理调用 exchange
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
        // Fetch subscription after login
        fetchSubscription(data.user.id, data.token);
      })
      .catch((err) => {
        console.error("Auth handoff failed:", err);
        setError(err.message || "Authentication failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fetchSubscription]);

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
  }, []);

  // 6. 获取登录 URL（用于登录按钮）
  const getLoginUrl = useCallback(() => {
    if (typeof window === "undefined") return `${BILLING_API}/api/auth/google`;
    const returnUrl = window.location.href;
    return `${BILLING_API}/api/auth/google?returnUrl=${encodeURIComponent(returnUrl)}`;
  }, []);

  return {
    user,
    token,
    subscription,
    isPro,
    isLoading,
    error,
    logout,
    getLoginUrl,
    isLoggedIn: !!user,
    mounted,
    creditsBalance,
    fetchCredits,
    refreshCredits: () => {
      // 触发全局 credits 刷新 - 通过 localStorage 事件通知所有组件
      console.log('[credits] triggering global refresh');
      localStorage.setItem("kindreply_refresh_credits", Date.now().toString());
      // 立即在当前标签页执行刷新
      fetchCredits();
      // 清理信号（避免重复触发）
      setTimeout(() => {
        localStorage.removeItem("kindreply_refresh_credits");
      }, 100);
    },
  };
}
