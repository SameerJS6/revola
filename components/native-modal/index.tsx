"use client";

import * as React from "react";
import * as DialogPrimitive from "@/components/ui/dialog";
import * as DrawerPrimitive from "@/components/ui/drawer";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type DrawerType = React.ComponentProps<typeof DrawerPrimitive.Drawer>;

const NativeModal = ({ shouldScaleBackground = true, ...props }: DrawerType) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModal = isMobile ? DialogPrimitive.Dialog : DrawerPrimitive.Drawer;
  return <NativeModal shouldScaleBackground={shouldScaleBackground} {...props} />;
};
NativeModal.displayName = "NativeModal";

const NativeModalTrigger = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.DialogTrigger>) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalTrigger = isMobile ? DialogPrimitive.DialogTrigger : DrawerPrimitive.DrawerTrigger;
  return <NativeModalTrigger {...props} />;
};
NativeModalTrigger.displayName = "NativeModalTrigger";

const NativeModalPortal = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.DialogPortal>) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalPortal = isMobile ? DialogPrimitive.DialogPortal : DrawerPrimitive.DrawerPortal;
  return <NativeModalPortal {...props} />;
};
NativeModalPortal.displayName = "NativeModalPortal";

const NativeModalOverlay = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.DialogOverlay>) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalOverlay = isMobile ? DialogPrimitive.DialogOverlay : DrawerPrimitive.DrawerOverlay;
  return (
    <NativeModalOverlay
      {...props}
      className={cn(
        "fixed inset-0 z-50 bg-black/80 sm:data-[state=open]:animate-in sm:data-[state=closed]:animate-out sm:data-[state=closed]:fade-out-0 sm:data-[state=open]:fade-in-0",
        className
      )}
    />
  );
};
NativeModalOverlay.displayName = "NativeModalOverlay";

const NativeModalContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.DialogContent>) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalContent = isMobile ? DialogPrimitive.DialogContent : DrawerPrimitive.DrawerContent;
  return (
    <NativeModalPortal>
      <NativeModalOverlay />
      <NativeModalContent
        {...props}
        className={cn(
          // "fixed z-50 bg-background",
          // isMobile
          //   ? "left-[50%] top-[50%] grid w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
          //   : "inset-x-0 bottom-0 mt-24 flex h-auto flex-col rounded-t-[10px] border",
          className
        )}
      >
        {/* {!isMobile && <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />} */}
        {children}
      </NativeModalContent>
    </NativeModalPortal>
  );
};
NativeModalContent.displayName = "NativeModalContent";

const NativeModalClose = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.DialogClose>) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalClose = isMobile ? DialogPrimitive.DialogClose : DrawerPrimitive.DrawerClose;
  return (
    <NativeModalClose {...props} className={cn("hover:opacity-100", className)}>
      {!children ? (
        <span className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity focus:outline-none focus:ring focus:ring-ring disabled:pointer-events-none">
          <X className="size-4" />
        </span>
      ) : (
        children
      )}
    </NativeModalClose>
  );
};
NativeModalClose.displayName = "NativeModalClose";

const NativeModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex flex-col gap-1.5 p-4 text-center sm:p-0 sm:text-left", className)} {...props} />;
};
NativeModalHeader.displayName = "NativeModalHeader";

const NativeModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer
      className={cn("flex flex-col gap-4 p-4 max-sm:mt-auto sm:flex-row sm:justify-end sm:gap-2 sm:p-0", className)}
      {...props}
    />
  );
};
NativeModalFooter.displayName = "NativeModalFooter";

const NativeModalTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.DialogTitle>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.DialogTitle>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalTitle = isMobile ? DialogPrimitive.DialogTitle : DrawerPrimitive.DrawerTitle;
  return (
    <NativeModalTitle
      ref={ref}
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
});

NativeModalTitle.displayName = "NativeModalTitle";

const NativeModalDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.DialogDescription>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.DialogDescription>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalDescription = isMobile ? DialogPrimitive.DialogDescription : DrawerPrimitive.DrawerDescription;
  return <NativeModalDescription ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />;
});

NativeModalDescription.displayName = "NativeModalDescription";

export {
  NativeModal,
  NativeModalTrigger,
  NativeModalPortal,
  NativeModalOverlay,
  NativeModalClose,
  NativeModalContent,
  NativeModalHeader,
  NativeModalFooter,
  NativeModalTitle,
  NativeModalDescription,
};
