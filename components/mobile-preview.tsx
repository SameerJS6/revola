"use client";

import { useState } from "react";

import { Smartphone } from "lucide-react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import IphoneMockup, { type Size } from "@/components/iphone-mockup";
import { ResponsiveDialog, ResponsiveDialogContent, ResponsiveDialogTrigger } from "@/registry/revola";
import { cn } from "@/lib/utils";

import useMediaQuery from "@/hooks/use-media-query";

type MobilePreviewProps = {
  previewLink: string;
  className?: string;
};

export default function MobilePreview({ previewLink, className }: MobilePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Multiple media queries for different screen heights
  const isMinHeight600 = useMediaQuery("(min-height: 600px)");
  const isMinHeight680 = useMediaQuery("(min-height: 680px)");
  const isMinHeight750 = useMediaQuery("(min-height: 750px)");
  // const isMinHeight820 = useMediaQuery("(min-height: 820px)");
  const isMinHeight900 = useMediaQuery("(min-height: 900px)");

  // Determine the appropriate size based on screen height
  const getMockupSize = (): Size | null => {
    if (!isMinHeight600) return null; // Too small, don't show preview
    if (!isMinHeight680) return "sm"; // 600-679px height
    if (!isMinHeight750) return "md"; // 680-749px height
    // if (!isMinHeight820) return "md"; // 750-819px height
    if (!isMinHeight900) return "lg"; // 820-899px height
    return "xl"; // 900px+ height
  };

  const mockupSize = getMockupSize();
  const showPreview = mockupSize !== null;

  return (
    <ResponsiveDialog
      onlyDrawer
      modal={false}
      direction="right"
      onOpenChange={setIsOpen}
      open={showPreview && isOpen}
      shouldScaleBackground={false}
    >
      {showPreview ? (
        <ResponsiveDialogTrigger
          data-open={isOpen ? "true" : "false"}
          className={cn(
            "relative flex size-9 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-medium shadow-sm transition-all disabled:pointer-events-none disabled:opacity-70",
            "data-[open=false]:bg-white data-[open=true]:bg-[#161615] data-[open=true]:text-white data-[open=false]:hover:bg-[#313130] data-[open=true]:hover:bg-[#FAFAFA]",
            "dark:data-[open=false]:bg-[#161615] dark:data-[open=true]:bg-white dark:data-[open=true]:text-[#161615] dark:data-[open=false]:hover:bg-[#1A1A19] dark:data-[open=true]:hover:bg-[#F9F9F8]",
            className
          )}
        >
          <Smartphone className="size-4" />
        </ResponsiveDialogTrigger>
      ) : (
        <TooltipProvider>
          <Tooltip delayDuration={150}>
            <TooltipTrigger>
              <div
                className={cn(
                  "relative flex size-9 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-medium shadow-sm transition-all disabled:pointer-events-none disabled:opacity-70",
                  "cursor-not-allowed bg-white opacity-50 hover:bg-[#FAFAFA] dark:bg-[#161615] dark:text-white dark:hover:bg-[#1A1A19]"
                )}
              >
                <Smartphone className="size-4" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="max-w-96">
              <p>
                Mobile Preview requires minimum viewport height of <code>600px</code>. Try to zoom out your page to
                enable this preview feature.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
      <ResponsiveDialogContent
        hideCloseButton
        className={cn(
          "z-10 aspect-[8/16] h-full w-[375px]",
          mockupSize === "sm" && "-right-6",
          mockupSize === "md" && "-right-2",
          mockupSize === "lg" && "right-4",
          mockupSize === "xl" && "right-8"
        )}
      >
        <div className="flex size-full items-center justify-center">
          <IphoneMockup fullScreen size={mockupSize ?? "sm"} className="h-full [&_div[data-canvas]]:bg-border/50">
            <div className="flex h-full flex-col justify-between">
              <iframe src={previewLink} className="size-full border-none" />
            </div>
          </IphoneMockup>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
