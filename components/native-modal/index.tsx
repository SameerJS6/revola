"use client";

import * as React from "react";
// import * as DialogPrimitive from "@/components/ui/dialog";
// import * as DrawerPrimitive from "@/components/ui/drawer";
// import { DialogContent as RadixDialogContent } from "@radix-ui/react-dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Drawer as DrawerPrimitive } from "vaul";
import { Content as VaulDrawerContent } from "vaul";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

// Todo:

// 1. Manage vertical margin of content on drawer.

type DrawerType = React.ComponentProps<typeof DrawerPrimitive.Root>;

const NativeModal = ({
  shouldScaleBackground = true,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  ...props
}: DrawerType) => {
  const [internalState, setInternalState] = React.useState<boolean>(false);

  const isControlledOpen = typeof controlledOpen === "undefined";
  const toggleInternalState = () => setInternalState((prev) => !prev);

  const open = isControlledOpen ? internalState : controlledOpen;
  const onOpenChange = isControlledOpen ? toggleInternalState : controlledOnOpenChange;

  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModal = isMobile ? DialogPrimitive.Root : DrawerPrimitive.Root;
  return (
    <NativeModal
      shouldScaleBackground={shouldScaleBackground}
      open={open}
      onOpenChange={onOpenChange}
      {...props}
      {...(!isMobile && { autoFocus: true })}
    />
  );
};
NativeModal.displayName = "NativeModal";

const NativeModalTrigger = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalTrigger = isMobile ? DialogPrimitive.Trigger : DrawerPrimitive.Trigger;
  return <NativeModalTrigger {...props} />;
};
NativeModalTrigger.displayName = "NativeModalTrigger";

const NativeModalPortal = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalPortal = isMobile ? DialogPrimitive.Portal : DrawerPrimitive.Portal;
  return <NativeModalPortal {...props} />;
};
NativeModalPortal.displayName = "NativeModalPortal";

const NativeModalOverlay = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalOverlay = isMobile ? DialogPrimitive.Overlay : DrawerPrimitive.Overlay;
  return (
    <NativeModalOverlay
      {...props}
      className={cn(
        "fixed inset-0 z-20 bg-black/40 md:data-[state=open]:animate-in md:data-[state=closed]:animate-out md:data-[state=closed]:fade-out-0 md:data-[state=open]:fade-in-0",
        className
      )}
    />
  );
};
NativeModalOverlay.displayName = "NativeModalOverlay";

const NativeModalClose = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalClose = isMobile ? DialogPrimitive.Close : DrawerPrimitive.Close;
  return <NativeModalClose aria-label="Close" {...props} />;
};
NativeModalClose.displayName = "NativeModalClose";

const NativeModalContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { hideCloseButton?: boolean }
>(({ className, children, hideCloseButton = false, ...props }, ref) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalContent = isMobile ? DialogPrimitive.Content : VaulDrawerContent;
  return (
    <NativeModalPortal>
      <NativeModalOverlay />
      <NativeModalContent
        ref={ref}
        {...props}
        className={cn(
          "fixed z-50 bg-background",
          isMobile
            ? "left-[50%] top-[50%] grid h-auto max-h-[min(640px,80dvh)] w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
            : "inset-x-0 bottom-0 mt-24 flex h-fit max-h-[85%] flex-col rounded-t-[10px] border pt-4",
          className
        )}
      >
        {!isMobile && (
          <DrawerPrimitive.Handle className="mb-4 rounded-full bg-muted-foreground/25 data-[vaul-handle]:h-2.5 data-[vaul-handle]:w-14 dark:bg-muted" />
        )}
        {!hideCloseButton && (
          <NativeModalClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="size-4" />
            <span className="sr-only">close</span>
          </NativeModalClose>
        )}
        {children}
      </NativeModalContent>
    </NativeModalPortal>
  );
});
NativeModalContent.displayName = "NativeModalContent";

const NativeModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex flex-col gap-1.5 p-4 text-center md:p-0 md:text-left", className)} {...props} />;
};
NativeModalHeader.displayName = "NativeModalHeader";

const NativeModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer
      className={cn("flex flex-col gap-4 p-4 max-md:mt-auto md:flex-row md:justify-end md:gap-2 md:p-0", className)}
      {...props}
    />
  );
};
NativeModalFooter.displayName = "NativeModalFooter";

const NativeModalTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalTitle = isMobile ? DialogPrimitive.Title : DrawerPrimitive.Title;
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
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const NativeModalDescription = isMobile ? DialogPrimitive.Description : DrawerPrimitive.Description;
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
