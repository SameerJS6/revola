"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

import { isPostHogEnabled, POSTHOG_HOST, POSTHOG_KEY } from "@/lib/posthog";

interface PostHogProviderProps {
  children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const isEnabled = isPostHogEnabled();
  useEffect(() => {
    if (isEnabled) {
      posthog.init(POSTHOG_KEY!, {
        api_host: POSTHOG_HOST,
        capture_pageview: true,
        capture_pageleave: true,
      });
    }
  }, []);

  return <>{children}</>;
}
