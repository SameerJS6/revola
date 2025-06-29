"use client";

import React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";

export default function VaulNonDismissibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ResponsiveDialog dismissible={false} open={isOpen} onOpenChange={setIsOpen}>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Non-Dismissible Revola
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent hideCloseButton>
        <div className="p-6">
          <ResponsiveDialogHeader className="space-y-4 p-0 text-left">
            <ResponsiveDialogTitle className="font-medium">Non-Dismissible Revola</ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="space-y-2 text-base">
              <span className="block">
                Prevents users from closing Revola through typical gestures or interactions.
              </span>
              <span className="block">
                With{" "}
                <kbd className="rounded border border-primary/15 bg-secondary/50 px-0.5 py-[1.5px] font-geist-mono text-xs text-secondary-foreground">
                  dismissible={"{false}"}
                </kbd>
                , only programmatic control can close it.
              </span>
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>

          <ResponsiveDialogFooter className="px-0">
            <ResponsiveDialogClose onClick={() => setIsOpen(false)} className={buttonVariants()}>
              Close Drawer
            </ResponsiveDialogClose>
          </ResponsiveDialogFooter>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
