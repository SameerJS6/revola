"use client";

import { MailIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";

export default function NewsletterDialog() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Subscribe
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="sm:max-w-sm">
        <div className="space-y-4 overflow-y-auto p-6 max-sm:pt-0">
          <div className="mb-2 flex flex-col items-center gap-2">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
              <svg
                className="stroke-zinc-800 dark:stroke-zinc-100"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
              </svg>
            </div>
            <ResponsiveDialogHeader className="py-0">
              <ResponsiveDialogTitle className="sm:text-center">Never miss an update</ResponsiveDialogTitle>
              <ResponsiveDialogDescription className="sm:text-center">
                Subscribe to receive news and special offers.
              </ResponsiveDialogDescription>
            </ResponsiveDialogHeader>
          </div>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="*:not-first:mt-2">
              <div className="relative">
                <Input
                  id="dialog-subscribe"
                  className="peer ps-9"
                  placeholder="hi@yourcompany.com"
                  type="email"
                  aria-label="Email"
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                  <MailIcon size={16} aria-hidden="true" />
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Subscribe
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground">
            By subscribing you agree to our{" "}
            <a className="underline hover:no-underline" href="#">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
