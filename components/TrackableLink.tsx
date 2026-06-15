"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useAnalytics } from "@/lib/analytics";

type TrackableLinkProps = ComponentProps<typeof Link> & {
  cta: string;
  location: string;
  eventProps?: Record<string, string | number | boolean | null | undefined>;
};

export default function TrackableLink({
  cta,
  location,
  eventProps,
  onClick,
  ...props
}: TrackableLinkProps) {
  const { trackCtaClick } = useAnalytics();

  return (
    <Link
      {...props}
      onClick={(event) => {
        trackCtaClick(cta, location, eventProps);
        onClick?.(event);
      }}
    />
  );
}
