"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

import { isPostHogEnabled } from "@/lib/posthog";

interface PostHogProviderProps {
  children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
  const isEnabled = isPostHogEnabled();

  useEffect(() => {
    if (isEnabled && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        defaults: "2025-05-24",
        name: "Revola",
        capture_pageview: true,
        capture_pageleave: true,
      });
    }
  }, [isEnabled]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
