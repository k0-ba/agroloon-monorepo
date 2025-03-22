"use client";

import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import posthog from "posthog-js";

export function PosthogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST as string,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
