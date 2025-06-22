"use client";

import {
  NativeModal,
  NativeModalContent,
  NativeModalDescription,
  NativeModalFooter,
  NativeModalHeader,
  NativeModalTitle,
  NativeModalTrigger,
} from "@/components/native-modal";
import { Button } from "@/components/ui/button";
export default function VaulInputDefaultDemo() {
  return (
    <NativeModal>
      <NativeModalTrigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:text-white dark:hover:bg-[#1A1A19]">
        Default Input Positioning Native Modal
      </NativeModalTrigger>
      <NativeModalContent className="flex max-h-[97vh] flex-col sm:p-0">
        <form className="overflow-auto rounded-t-[10px] px-6 sm:p-6">
          <NativeModalHeader className="mb-2 px-0 text-left sm:mb-6">
            <NativeModalTitle className="font-medium">New Project</NativeModalTitle>
            <NativeModalDescription className="leading-6">
              Get started by filling in the information below to create your new project.
            </NativeModalDescription>
          </NativeModalHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Project name
              </label>
              <input
                id="name"
                className="h-9 w-full rounded-lg border border-border bg-fd-background px-3 outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Description
              </label>
              <textarea
                rows={6}
                className="w-full resize-none rounded-lg border border-border bg-fd-background p-3 pt-2.5 outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <NativeModalFooter className="px-0 pt-6 sm:pt-4">
            <Button className="font-medium">Submit</Button>
          </NativeModalFooter>
        </form>
      </NativeModalContent>
    </NativeModal>
  );
}
