import React from "react";

import { cn } from "@/lib/utils";

// TODO: This Component can be improved but for now it works (Inspired from @alisamadiii's IOS Mockup package)

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
type SizeConfig = {
  maxWidth: string;
  maxHeight: string;
  rounded: string;
  innerRounded: string;
  canvasRounded: string;
  padding: string;
  innerPadding: string;
  islandWidth: string;
  islandHeight: string;
};

const sizes = {
  xs: {
    maxWidth: "max-w-[240px]",
    maxHeight: "max-h-[480px]",
    rounded: "rounded-[42px]",
    innerRounded: "rounded-[37px]",
    canvasRounded: "rounded-[29px]",
    padding: "p-[3px]",
    innerPadding: "p-1.5",
    islandWidth: "w-[80px]",
    islandHeight: "h-[25px]",
  },
  sm: {
    maxWidth: "max-w-[280px]",
    maxHeight: "max-h-[560px]",
    rounded: "rounded-[48px]",
    innerRounded: "rounded-[43px]",
    canvasRounded: "rounded-[35px]",
    padding: "p-[3.5px]",
    innerPadding: "p-1.5",
    islandWidth: "w-[90px]",
    islandHeight: "h-[28px]",
  },
  md: {
    maxWidth: "max-w-[320px]",
    maxHeight: "max-h-[640px]",
    rounded: "rounded-[55px]",
    innerRounded: "rounded-[50px]",
    canvasRounded: "rounded-[42px]",
    padding: "p-[4px]",
    innerPadding: "p-2",
    islandWidth: "w-[100px]",
    islandHeight: "h-[30px]",
  },
  lg: {
    maxWidth: "max-w-[360px]",
    maxHeight: "max-h-[720px]",
    rounded: "rounded-[60px]",
    innerRounded: "rounded-[55px]",
    canvasRounded: "rounded-[48px]",
    padding: "p-[4.5px]",
    innerPadding: "p-2",
    islandWidth: "w-[110px]",
    islandHeight: "h-[32px]",
  },
  xl: {
    maxWidth: "max-w-[430px]",
    maxHeight: "max-h-[800px]",
    rounded: "rounded-[72px]",
    innerRounded: "rounded-[67px]",
    canvasRounded: "rounded-[56px]",
    padding: "p-[5.5px]",
    innerPadding: "p-2.5",
    islandWidth: "w-[125px]",
    islandHeight: "h-[37px]",
  },
} satisfies Record<Size, SizeConfig>;

interface IphoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
  size?: Size;
}

export default function IphoneMockup({ children, className = "", fullScreen = false, size = "xl" }: IphoneMockupProps) {
  const sizeConfig = sizes[size];

  return (
    <div
      id="iphone-frame"
      className={cn("relative aspect-[8/16] size-full overflow-hidden", sizeConfig.maxHeight, sizeConfig.maxWidth)}
    >
      <div
        className={cn(
          "relative h-full w-full border-2 border-black bg-black",
          sizeConfig.rounded,
          sizeConfig.padding,
          className
        )}
        style={{
          background: "linear-gradient(180deg, #EEEAE1 0%, #D1CCC2 100%)",
          boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.20) inset, 0px 0px 3px 2px rgba(0, 0, 0, 0.40) inset",
        }}
      >
        <div
          className={cn(
            "h-full w-full border-2 border-black bg-black",
            sizeConfig.innerRounded,
            sizeConfig.innerPadding
          )}
          style={{
            boxShadow: "0px 0px 3px 1px rgba(255, 255, 255, 0.25), 0px 0px 0.5px 2px #3C3C3C inset",
          }}
        >
          <div
            data-canvas
            className={cn("relative h-full w-full overflow-hidden bg-background", sizeConfig.canvasRounded)}
          >
            <div className="no-scrollbar h-full">
              <div
                data-dynamic-island
                className={cn(
                  "sticky top-0 z-20 flex items-center justify-center py-3",
                  fullScreen && "absolute w-full"
                )}
              >
                <div className={cn("rounded-full bg-black", sizeConfig.islandWidth, sizeConfig.islandHeight)}></div>
              </div>
              {children}
              {/* <div className="pointer-events-none h-12 w-full"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
