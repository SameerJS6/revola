"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";

export default function VaulControlledDemo() {
  const [open, setOpen] = useState(false);
  return (
    <ResponsiveDialog open={open} onOpenChange={setOpen}>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Controlled Revola
        </Button>
      </ResponsiveDialogTrigger>

      <ResponsiveDialogContent>
        <div className="mx-auto mb-2 max-w-md bg-background px-6 py-4 sm:p-0 sm:pt-6">
          <ResponsiveDialogHeader className="gap-4 text-left">
            <ResponsiveDialogTitle className="text-base font-medium leading-6 tracking-normal">
              Controlled Revola
            </ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="space-y-2 max-md:text-base">
              <span className="block">
                Control Revola's open state programmatically using the{" "}
                <kbd className="rounded border border-primary/15 bg-secondary/50 px-0.5 py-[1.5px] font-geist-mono text-xs text-secondary-foreground">
                  open
                </kbd>{" "}
                prop, just like any other dialog component.
              </span>
              <span className="block">
                The{" "}
                <kbd className="rounded border border-primary/15 bg-secondary/50 px-0.5 py-[1.5px] font-geist-mono text-xs text-secondary-foreground">
                  onOpenChange
                </kbd>{" "}
                prop handles user interactions like clicking outside, pressing escape, or swiping down on mobile.
              </span>
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>

        <ResponsiveDialogFooter className="border-t border-border bg-secondary/25 px-6 py-4 dark:bg-secondary/50">
          <div className="mx-auto flex w-full max-w-md justify-end gap-6">
            <a
              className="gap-0.25 flex items-center text-xs text-secondary-foreground"
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
