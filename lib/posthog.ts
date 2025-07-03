import posthog from "posthog-js";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

export const isPostHogEnabled = () => {
  if (process.env.NODE_ENV === "development") {
    return false;
  }

  return typeof window !== "undefined" && POSTHOG_KEY && POSTHOG_HOST;
};

export const trackEvent = (event: string, properties?: Record<string, unknown>) => {
  posthog.capture(event, properties);
};
