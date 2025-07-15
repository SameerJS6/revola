"use client";

import Link from "next/link";

import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cva } from "class-variance-authority";

import MobilePreview from "@/components/mobile-preview";
import RevolaHeroDemo from "@/components/revola-hero-demo";
import { generateMobilePreviewLink } from "@/lib/mobile-preview";
import { trackEvent } from "@/lib/posthog";
import { cn } from "@/lib/utils";

export const focusRingVariants = cva("focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900", {
  variants: {
    offset: {
      default: "focus-visible:ring-offset-2",
      small: "focus-visible:ring-offset-1",
    },
  },
  defaultVariants: {
    offset: "default",
  },
});

export const textVariants = cva("", {
  variants: {
    selection: {
      dark: "selection:bg-zinc-900 selection:text-zinc-50",
    },
    size: {
      title: "text-6xl font-semibold tracking-tight text-zinc-900 md:text-7xl",
      subtitle: "text-lg font-medium text-zinc-500 md:text-xl",
      link: "text-zinc-500 underline underline-offset-4",
    },
  },
  defaultVariants: {
    selection: "dark",
  },
});

export default function RevolaHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  if (typeof window === "undefined") return;

  const previewLink = generateMobilePreviewLink("vaul-default-demo", window.location.origin);

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-white px-4">
      <BackgroundGrid />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          mask: "linear-gradient(to top, rgba(249, 250, 251, 1) 0%, rgba(249, 250, 251, 0.9) 20%, rgba(249, 250, 251, 0.6) 40%, transparent 65%)",
        }}
      />

      <motion.div
        className="relative z-10 max-w-2xl space-y-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={cn(textVariants({ size: "title", selection: "dark" }))} variants={itemVariants}>
          Revola
        </motion.h1>

        <motion.p
          className={cn(textVariants({ size: "subtitle", selection: "dark" }), "-mt-2")}
          variants={itemVariants}
        >
          One component. Modal on desktop, Drawer on mobile.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
          variants={buttonVariants}
        >
          <div className="flex items-center gap-3">
            <RevolaHeroDemo />
            <MobilePreview
              previewLink={previewLink ?? ""}
              className={cn(
                focusRingVariants(),
                "max-md:hidden",
                "data-[open=false]:bg-[#161615] data-[open=true]:bg-[#f1f1f1] data-[open=false]:text-white data-[open=true]:text-[#161615] data-[open=false]:hover:bg-[#1A1A19] data-[open=true]:hover:bg-[#F9F9F8]",
                "dark:data-[open=true]:bg-[#f1f1f1]"
              )}
            />
          </div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SameerJS6/revola"
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-full pl-4 pr-3 font-medium text-zinc-900 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-800",
              textVariants({ selection: "dark" }),
              focusRingVariants()
            )}
            onClick={() => {
              trackEvent("navigate_to_github_hero", {
                button_name: "github_link",
              });
            }}
          >
            GitHub
            <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>

        <motion.div className="pt-2" variants={buttonVariants}>
          <Link
            href="/docs"
            onClick={() => {
              trackEvent("navigate_to_documentation", {
                button_name: "documentation_link",
              });
            }}
            className={cn(
              "rounded px-2 py-1 transition-colors duration-200 hover:text-gray-700",
              textVariants({ size: "link", selection: "dark" }),
              focusRingVariants()
            )}
          >
            Documentation
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

function BackgroundGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full stroke-gray-200 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
        <path
          d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
          strokeWidth="0"
        />
      </svg>
      <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)" />
    </svg>
  );
}
