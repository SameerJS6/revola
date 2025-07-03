"use client";

import { ExternalLinkIcon } from "lucide-react";
import { cva } from "class-variance-authority";

import { Button } from "@/components/ui/button";
import { focusRingVariants, textVariants } from "@/components/hero";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";
import { trackEvent } from "@/lib/posthog";
import { cn } from "@/lib/utils";

export default function RevolaHeroDemo() {
  const linkVariants = cva(
    "gap-0.25 flex items-center text-xs text-fd-secondary-foreground transition-colors duration-200 hover:text-fd-secondary-foreground/65",
    {
      variants: {
        focus: {
          default:
            "focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        },
      },
      defaultVariants: {
        focus: "default",
      },
    }
  );

  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className={cn(
            "rounded-full border-gray-300 bg-white px-6 py-2 text-zinc-900 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900",
            textVariants({ selection: "dark" }),
            focusRingVariants()
          )}
          onClick={() => {
            trackEvent("open_revola_dialog", {
              button_name: "open_revola_dialog",
            });
          }}
        >
          Open Revola
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent>
        <div className="mx-auto mb-2 max-w-md">
          <ResponsiveDialogHeader className="gap-4 px-6 text-left sm:gap-4 sm:pt-6">
            <ResponsiveDialogTitle className="text-base font-medium leading-6 tracking-normal">
              Welcome to Revola
            </ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="max-md:text-base">
              A responsive dialog that automatically adapts to your device - drawer on mobile, modal on desktop.
              <span className="mt-2 block">
                Zero configuration needed. Just use it like any other dialog component.
              </span>
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>

        <ResponsiveDialogFooter className="border-t border-border bg-fd-secondary/25 px-6 dark:bg-fd-secondary/50 sm:pb-4 sm:pt-4">
          <div className="mx-auto flex w-full max-w-md justify-end gap-6">
            <a
              className={linkVariants()}
              href="https://github.com/SameerJS6/revola"
              target="_blank"
              onClick={() => {
                trackEvent("navigate_to_github_hero_demo", {
                  button_name: "github_link",
                });
              }}
              rel="noopener noreferrer"
            >
              GitHub
              <ExternalLinkIcon className="ml-1 size-3" />
            </a>
            <a
              className={linkVariants()}
              href="https://twitter.com/sameerjs6"
              target="_blank"
              onClick={() => {
                trackEvent("navigate_to_twitter_from_hero_demo", {
                  button_name: "twitter_link",
                });
              }}
              rel="noopener noreferrer"
            >
              Twitter
              <ExternalLinkIcon className="ml-1 size-3" />
            </a>
          </div>
        </ResponsiveDialogFooter>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
