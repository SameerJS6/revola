"use client";

import Link from "next/link";

import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import MobilePreview from "@/components/mobile-preview";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";

export default function RevolaHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  } as Variants;

  const itemVariants = {
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
  } as Variants;

  const buttonVariants = {
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
  } as Variants;

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-white px-4">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full stroke-gray-200 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none"></path>
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth="0"
          ></path>
        </svg>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
      </svg>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          mask: "linear-gradient(to top, rgba(249, 250, 251, 1) 0%, rgba(249, 250, 251, 0.9) 20%, rgba(249, 250, 251, 0.6) 40%, transparent 65%)`",
        }}
      />

      <motion.div
        className="relative z-10 max-w-2xl space-y-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.h1
          className="text-6xl font-semibold tracking-tight text-zinc-900 selection:bg-zinc-900 selection:text-zinc-50 md:text-7xl"
          variants={itemVariants}
        >
          Revola
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="-mt-2 text-lg font-medium text-zinc-500 selection:bg-zinc-900 selection:text-zinc-50 md:text-xl"
          variants={itemVariants}
        >
          Dialogs that revolve around your screen.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
          variants={buttonVariants}
        >
          <div className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <ResponsiveDialog>
              <ResponsiveDialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-gray-300 bg-white px-6 py-2 text-zinc-900 transition-all duration-200 selection:bg-zinc-900 selection:text-zinc-50 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
                >
                  Open Revola
                </Button>
              </ResponsiveDialogTrigger>
              <ResponsiveDialogContent>
                <div className="mx-auto mb-2 max-w-md">
                  <ResponsiveDialogHeader className="gap-4 px-6 text-left sm:gap-4 sm:pt-6">
                    <ResponsiveDialogTitle className="text-base font-medium leading-6 tracking-normal">
                      Drawer for React.
                    </ResponsiveDialogTitle>
                    <ResponsiveDialogDescription className="max-md:text-base">
                      This component can be used as a Dialog replacement on mobile and tablet devices.
                      <span className="mt-2 block">
                        This one specifically is the most simplest setup you can have, just a simple drawer with a
                        trigger.
                      </span>
                    </ResponsiveDialogDescription>
                  </ResponsiveDialogHeader>
                </div>

                <ResponsiveDialogFooter className="border-t border-border bg-secondary/25 px-6 dark:bg-secondary/50 sm:pb-4 sm:pt-4">
                  <div className="mx-auto flex w-full max-w-md justify-end gap-6">
                    <a
                      className="gap-0.25 flex items-center text-xs text-secondary-foreground transition-colors duration-200 hover:text-zinc-900 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                      href="https://github.com/SameerJS6/revola"
                      target="_blank"
                    >
                      GitHub
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="ml-1 h-3 w-3"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                    <a
                      className="gap-0.25 flex items-center text-xs text-secondary-foreground transition-colors duration-200 hover:text-zinc-900 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1"
                      href="https://twitter.com/sameerjs6"
                      target="_blank"
                    >
                      Twitter
                      <svg
                        fill="none"
                        height="16"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="16"
                        aria-hidden="true"
                        className="ml-1 h-3 w-3"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14L21 3"></path>
                      </svg>
                    </a>
                  </div>
                </ResponsiveDialogFooter>
              </ResponsiveDialogContent>
            </ResponsiveDialog>
          </div>

          <div className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <MobilePreview
              previewLink="http://localhost:3000/iphone-preview/default-demo"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            />
          </div>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SameerJS6/revola"
            className="inline-flex h-10 items-center gap-2 rounded-full pl-4 pr-3 font-medium text-zinc-900 transition-colors duration-200 selection:bg-zinc-900 selection:text-zinc-50 hover:bg-zinc-100 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            GitHub
            <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>

        <motion.div className="pt-2" variants={buttonVariants}>
          <Link
            href="/docs"
            className="rounded px-2 py-1 text-zinc-500 underline underline-offset-4 transition-colors duration-200 selection:bg-zinc-900 selection:text-zinc-50 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            Documentation
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
