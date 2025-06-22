import React from "react";
import { Button } from "@/components/ui/button";
import {
  NativeModal,
  NativeModalContent,
  NativeModalDescription,
  NativeModalHeader,
  NativeModalTitle,
  NativeModalTrigger,
} from "@/components/native-modal";

export default function VaulSideDrawerDefaultDemo() {
  return (
    <NativeModal shouldScaleBackground={false} direction="right">
      <NativeModalTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Side Drawer Native Modal
        </Button>
      </NativeModalTrigger>
      {/* When using direction props, never use Modal's content directly, always use a wrapper element and then have all the modal's content or else, it will cause a weird background attached to entire drawer  */}
      <NativeModalContent hideCloseButton>
        <div className="flex size-full grow flex-col rounded-2xl bg-fd-background p-6">
          <NativeModalHeader className="space-y-2 text-left">
            <NativeModalTitle>It supports all directions.</NativeModalTitle>
            <NativeModalDescription className="text-base">
              This one specifically is not touching the edge of the screen, but that&apos;s not required for a side
              drawer.
            </NativeModalDescription>
          </NativeModalHeader>
        </div>
      </NativeModalContent>
    </NativeModal>
  );
}
