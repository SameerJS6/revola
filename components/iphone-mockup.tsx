import { cn } from "@/lib/utils";
import React from "react";

interface IphoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
}

export default function IphoneMockup({ children, className = "", fullScreen = false }: IphoneMockupProps) {
  return (
    <div id="iphone-frame" className="relative aspect-[8/16] size-full max-h-[800px] max-w-[430px] overflow-hidden">
      <div
        className={`relative h-full w-full rounded-[72px] p-[5.5px] ${className}`}
        style={{
          background: "linear-gradient(180deg, #EEEAE1 0%, #D1CCC2 100%)",
          boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.20) inset, 0px 0px 3px 2px rgba(0, 0, 0, 0.40) inset",
        }}
      >
        <div
          className="h-full w-full rounded-[67px] border-2 border-black bg-black p-2.5"
          style={{
            boxShadow: "0px 0px 3px 1px rgba(255, 255, 255, 0.25), 0px 0px 0.5px 2px #3C3C3C inset",
          }}
        >
          <div data-canvas className="bg-background-100 relative h-full w-full overflow-hidden rounded-[56px]">
            <div className="no-scrollbar h-full">
              <div
                data-dynamic-island
                className={cn(
                  "sticky top-0 z-20 flex items-center justify-center py-3",
                  fullScreen && "absolute w-full"
                )}
              >
                <div className="h-[37px] w-[125px] rounded-full bg-black"></div>
              </div>
              {children}
              <div className="pointer-events-none h-12 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
