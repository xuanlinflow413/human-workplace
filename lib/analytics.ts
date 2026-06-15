"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

type PlausibleEvent =
  | "CTA Click"
  | "Login Start"
  | "Checkout Start"
  | "Checkout Success"
  | "Entitlement Activated"
  | "Generate Click"
  | "Regenerate Click";

type EventProps = Record<string, string | number | boolean | null | undefined>;

export function trackEvent(event: PlausibleEvent, props: EventProps = {}) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(event, { props });
  }
}

export function useAnalytics() {
  const trackCtaClick = useCallback((cta: string, location: string, extraProps: EventProps = {}) => {
    trackEvent("CTA Click", { cta, location, ...extraProps });
  }, []);

  const trackLoginStart = useCallback((location: string) => {
    trackEvent("Login Start", { location });
  }, []);

  const trackLoginClicked = useCallback((location: string) => {
    trackLoginStart(location);
  }, [trackLoginStart]);

  const trackGenerateClicked = useCallback((tool: string, hasJd: boolean) => {
    trackEvent("Generate Click", { tool, has_jd: hasJd });
  }, []);

  const trackRegenerateClicked = useCallback((tool: string) => {
    trackEvent("Regenerate Click", { tool });
  }, []);

  const trackBuyCreditsClicked = useCallback((location: string, planId?: string) => {
    trackCtaClick("buy_credits", location, { plan_id: planId });
  }, [trackCtaClick]);

  const trackCheckoutStarted = useCallback((planId: string, planName: string, price: string, location = "pricing") => {
    trackEvent("Checkout Start", { plan_id: planId, plan_name: planName, price, location });
  }, []);

  const trackCheckoutSuccess = useCallback((planId: string, planName: string) => {
    trackEvent("Checkout Success", { plan_id: planId, plan_name: planName });
  }, []);

  const trackEntitlementActivated = useCallback((planId: string, planName: string, creditsAdded?: number) => {
    trackEvent("Entitlement Activated", { plan_id: planId, plan_name: planName, credits_added: creditsAdded });
  }, []);

  const trackSubscriptionStarted = useCallback((planId: string, planName: string) => {
    trackEntitlementActivated(planId, planName);
  }, [trackEntitlementActivated]);

  return {
    trackCtaClick,
    trackLoginStart,
    trackLoginClicked,
    trackGenerateClicked,
    trackRegenerateClicked,
    trackBuyCreditsClicked,
    trackCheckoutStarted,
    trackCheckoutSuccess,
    trackEntitlementActivated,
    trackSubscriptionStarted,
  };
}
