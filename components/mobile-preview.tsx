"use client";
import IphoneMockup from "@/components/iphone-mockup";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Smartphone } from "lucide-react";
import { useState } from "react";
import { Drawer } from "vaul";

export default function MobilePreview() {
  const [isOpen, setIsOpen] = useState(false);
  const isRequiredHeight = useMediaQuery("(min-height: 750px)");

  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen} direction="right" modal={false}>
      {isRequiredHeight ? (
        <Drawer.Trigger
          disabled={!isRequiredHeight}
          className={cn(
            "relative flex size-9 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-medium shadow-sm transition-all disabled:pointer-events-none disabled:opacity-70",
            isOpen
              ? "bg-[#161615] text-white hover:bg-[#313130] dark:bg-white dark:text-[#161615]"
              : "bg-white hover:bg-[#FAFAFA] dark:bg-[#161615] dark:text-white dark:hover:bg-[#1A1A19]"
          )}
        >
          <Smartphone className="size-4" />
        </Drawer.Trigger>
      ) : (
        <TooltipProvider>
          <Tooltip delayDuration={150}>
            <TooltipTrigger>
              <Drawer.Trigger
                disabled={!isRequiredHeight}
                className={cn(
                  "relative flex size-9 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-medium shadow-sm transition-all disabled:pointer-events-none disabled:opacity-70",
                  isOpen
                    ? "bg-[#161615] text-white hover:bg-[#313130] dark:bg-white dark:text-[#161615]"
                    : "bg-white hover:bg-[#FAFAFA] dark:bg-[#161615] dark:text-white dark:hover:bg-[#1A1A19]"
                )}
              >
                <Smartphone className="size-4" />
              </Drawer.Trigger>
            </TooltipTrigger>
            <TooltipContent className="max-w-96">
              <p>
                Mobile Preview requires minimum view port height of <code>750px</code>. Try to zoom out your page to
                enable this preview feature.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="fixed bottom-2 right-4 top-2 z-10 flex aspect-[8/16] h-full w-[375px] outline-none"
          style={{ "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties}
        >
          <div className="flex size-full grow flex-col justify-center">
            <IphoneMockup fullScreen className="h-full [&_div[data-canvas]]:bg-border/50">
              <div className="flex h-[calc(100%-(-1px))] flex-col justify-between">
                <iframe src="http://localhost:3000/iphone-preview/vaul/default" className="size-full border-none" />
              </div>
            </IphoneMockup>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
