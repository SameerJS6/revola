export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;

export const isPostHogEnabled = () => {
  if (process.env.NODE_ENV === "development") {
    return false;
  }

  return typeof window !== "undefined" && POSTHOG_KEY && POSTHOG_HOST;
};
