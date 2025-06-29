"use client";

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

export default function VaulDefaultDemo() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6">
          Vaul Default Demo
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
                This one specifically is the most simplest setup you can have, just a simple drawer with a trigger.
              </span>
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>

        <ResponsiveDialogFooter className="border-t border-border bg-secondary/25 px-6 dark:bg-secondary/50 sm:pb-4 sm:pt-4">
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
