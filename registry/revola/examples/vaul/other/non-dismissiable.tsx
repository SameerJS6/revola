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
          Vaul Non-Dismissible Demo
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent hideCloseButton>
        <div className="p-6">
          <ResponsiveDialogHeader className="space-y-4 p-0 text-left">
            <ResponsiveDialogTitle className="font-medium">A non-dismissible drawer.</ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="space-y-2 text-base">
              <span className="block">For cases when your drawer has to be always visible.</span>
              <span className="block">
                Nothing will close it unless you make it controlled and close it programmatically.
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
