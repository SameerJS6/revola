"use client";

import React from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  NativeModal,
  NativeModalClose,
  NativeModalContent,
  NativeModalDescription,
  NativeModalFooter,
  NativeModalHeader,
  NativeModalTitle,
  NativeModalTrigger,
} from "@/components/native-modal";

export default function VaulNonDismissiableDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NativeModal dismissible={false} open={isOpen} onOpenChange={setIsOpen}>
      <NativeModalTrigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:text-white dark:hover:bg-[#1A1A19]">
        Non dismissible Native Modal
      </NativeModalTrigger>
      <NativeModalContent hideCloseButton>
        <div className="p-6">
          <NativeModalHeader className="space-y-4 p-0 text-left">
            <NativeModalTitle className="font-medium">A non-dismissible drawer.</NativeModalTitle>
            <NativeModalDescription className="space-y-2 text-base">
              <span className="block">For cases when your drawer has to be always visible.</span>
              <span className="block">
                Nothing will close it unless you make it controlled and close it programmatically.
              </span>
            </NativeModalDescription>
          </NativeModalHeader>

          <NativeModalFooter className="px-0">
            <NativeModalClose onClick={() => setIsOpen(false)} className={buttonVariants()}>
              Close Drawer
            </NativeModalClose>
          </NativeModalFooter>
        </div>
      </NativeModalContent>
    </NativeModal>
  );
}
