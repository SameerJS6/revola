"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogTrigger,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
} from "@/registry/revola";

export default function VaulControlledDemo() {
  const [open, setOpen] = useState(false);
  return (
    <ResponsiveDialog open={open} onOpenChange={setOpen}>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6">
          Vaul Controlled Demo
        </Button>
      </ResponsiveDialogTrigger>

      <ResponsiveDialogContent>
        <div className="mx-auto mb-2 max-w-md bg-fd-background">
          <ResponsiveDialogHeader className="gap-4 px-6 text-left sm:gap-4 sm:pt-6">
            <ResponsiveDialogTitle className="text-base font-medium leading-6 tracking-normal">
              A controlled drawer.
            </ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="space-y-2 max-md:text-base">
              <span className="block">
                This means that the drawer no longer manages its own state. Instead, you can control it programmatically
                from the outside.
              </span>
              <span className="block">
                But you can still let the drawer help you a bit by passing the `onOpenChange` prop. This way, the drawer
                will change your open state when the user clicks outside of it, or when they press the escape key for
                example.
              </span>
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>

        <ResponsiveDialogFooter className="border-t border-border bg-secondary/25 px-6 dark:bg-secondary/50 sm:pb-4 sm:pt-4">
          <div className="mx-auto flex w-full max-w-md justify-end gap-6">
            <a
              className="gap-0.25 flex items-center text-xs text-secondary-foreground"
              href="https://github.com/SameerJS6/native-modal"
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
              className="gap-0.25 flex items-center text-xs text-secondary-foreground"
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
  );
}
