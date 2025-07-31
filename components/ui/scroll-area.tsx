"use client";

import * as React from "react";
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui-components/react/scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none opacity-0 transition-opacity delay-300 data-[hovering]:opacity-100 data-[scrolling]:opacity-100 data-[hovering]:delay-0 data-[scrolling]:delay-0 data-[hovering]:duration-75 data-[scrolling]:duration-75",

      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "!-bottom-px h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.Scrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

export { ScrollArea, ScrollBar };
