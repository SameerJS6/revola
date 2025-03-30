"use client";

import * as React from "react";
// import * as DialogPrimitive from "@/components/ui/dialog";
// import * as DrawerPrimitive from "@/components/ui/drawer";
// import { DialogContent as RadixDialogContent } from "@radix-ui/react-dialog";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Drawer as DrawerPrimitive, Content as VaulDrawerContent } from "vaul";
import { cva } from "class-variance-authority";

type DrawerType = React.ComponentProps<typeof DrawerPrimitive.Root>;

type NativeModalContextProps = {
  modal?: boolean;
  dismissible?: boolean;
  direction?: "top" | "right" | "bottom" | "left";
};

type NativeModalProviderProps = {
  children: React.ReactNode;
} & NativeModalContextProps;

const NativeModalContext = React.createContext<NativeModalContextProps>({});

const NativeModalProvider = ({
  modal = true,
  dismissible = true,
  direction = "bottom",
  children,
}: NativeModalProviderProps) => {
  return (
    <NativeModalContext.Provider value={{ modal, dismissible, direction }}>{children}</NativeModalContext.Provider>
  );
};

const useNativeModal = () => {
  const context = React.useContext(NativeModalContext);

  if (!context) {
    throw new Error("useNativeModal must be used within a <NativeModal />");
  }

  return context;
};

const NativeModal = ({
  modal = true,
  dismissible = true,
  direction = "bottom",
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

  const isMobile = useMediaQuery("(min-width: 640px)");
  const NativeModal = isMobile ? DialogPrimitive.Root : DrawerPrimitive.Root;
  return (
    <NativeModalProvider modal={modal} dismissible={dismissible} direction={direction}>
      <NativeModal
        modal={modal}
        direction={direction}
        dismissible={dismissible}
        shouldScaleBackground={shouldScaleBackground}
        open={open}
        onOpenChange={onOpenChange}
        {...props}
        {...(!isMobile && { autoFocus: true })}
      />
    </NativeModalProvider>
  );
};
NativeModal.displayName = "NativeModal";

const NativeModalTrigger = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) => {
  const isMobile = useMediaQuery("(min-width: 640px)");
  const NativeModalTrigger = isMobile ? DialogPrimitive.Trigger : DrawerPrimitive.Trigger;
  return <NativeModalTrigger {...props} />;
};
NativeModalTrigger.displayName = "NativeModalTrigger";

const NativeModalPortal = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) => {
  const isMobile = useMediaQuery("(min-width: 640px)");
  const NativeModalPortal = isMobile ? DialogPrimitive.Portal : DrawerPrimitive.Portal;
  return <NativeModalPortal {...props} />;
};
NativeModalPortal.displayName = "NativeModalPortal";

const NativeModalOverlay = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) => {
  const isMobile = useMediaQuery("(min-width: 640px)");
  const NativeModalOverlay = isMobile ? DialogPrimitive.Overlay : DrawerPrimitive.Overlay;
  return (
    <NativeModalOverlay
      {...props}
      className={cn(
        "fixed inset-0 z-50 bg-black/40 sm:data-[state=open]:animate-in sm:data-[state=closed]:animate-out sm:data-[state=closed]:fade-out-0 sm:data-[state=open]:fade-in-0",
        className
      )}
    />
  );
};
NativeModalOverlay.displayName = "NativeModalOverlay";

const NativeModalClose = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) => {
  const { dismissible } = useNativeModal();
  const isMobile = useMediaQuery("(min-width: 640px)");
  const NativeModalClose = isMobile ? DialogPrimitive.Close : DrawerPrimitive.Close;
  return (
    <NativeModalClose aria-label="Close" {...(!dismissible && { onClick: (e) => e.preventDefault() })} {...props} />
  );
};
NativeModalClose.displayName = "NativeModalClose";

const NativeModalContentVariants = cva("fixed z-[9999] bg-fd-background", {
  variants: {
    device: {
      desktop:
        "left-[50%] top-[50%] grid h-auto max-h-[min(640px,80dvh)] w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
      mobile: "flex ",
    },
    direction: {
      bottom: "",
      top: "",
      left: "",
      right: "",
    },
  },
  defaultVariants: {
    device: "desktop",
    direction: "bottom",
  },
  compoundVariants: [
    {
      device: "mobile",
      direction: "bottom",
      className:
        "inset-x-0 bottom-0 mt-24 h-fit max-h-[85%] flex-col rounded-t-[10px] border border-b-0 border-primary/10 pt-4",
    },
    {
      device: "mobile",
      direction: "top",
      className:
        "inset-x-0 top-0 mb-24 h-fit max-h-[85%] flex-col rounded-b-[10px] border border-b-0 border-primary/10",
    },
    {
      device: "mobile",
      direction: "left",
      className:
        "bottom-2 left-2 top-2 flex w-[310px] bg-transparent outline-none  [--initial-transform:calc(100%+8px)]",
    },
    {
      device: "mobile",
      direction: "right",
      className: "bottom-2 right-2 top-2 w-[310px] bg-transparent outline-none  [--initial-transform:calc(100%+8px)]",
    },
  ],
});

const NativeModalContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { hideCloseButton?: boolean }
>(({ className, children, hideCloseButton = false, ...props }, ref) => {
  const { direction, modal, dismissible } = useNativeModal();

  const isMobile = useMediaQuery("(min-width: 640px)");
  const NativeModalContent = isMobile ? DialogPrimitive.Content : VaulDrawerContent;

  const isDisabled = !modal || !dismissible;
  return (
    <NativeModalPortal>
      <NativeModalOverlay />
      <NativeModalContent
        ref={ref}
        {...props}
        {...(!dismissible && isMobile && { onEscapeKeyDown: (e) => e.preventDefault() })}
        {...(isDisabled &&
          isMobile && {
            onInteractOutside: (e) => e.preventDefault(),
          })}
        className={cn(
          NativeModalContentVariants({
            device: isMobile ? "desktop" : "mobile",
            direction,
          }),
          className
        )}
      >
        {!isMobile && direction === "bottom" && (
          <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-muted-foreground/25 data-[vaul-handle]:h-1.5 data-[vaul-handle]:w-14 data-[vaul-handle]:pb-1.5 dark:bg-muted" />
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
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => {
  const isMobile = useMediaQuery("(min-width: 640px)");
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
  const isMobile = useMediaQuery("(min-width: 640px)");
  const NativeModalDescription = isMobile ? DialogPrimitive.Description : DrawerPrimitive.Description;
  return <NativeModalDescription ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />;
});

NativeModalDescription.displayName = "NativeModalDescription";

export {
  NativeModal,
  NativeModalClose,
  NativeModalContent,
  NativeModalDescription,
  NativeModalFooter,
  NativeModalHeader,
  NativeModalOverlay,
  NativeModalPortal,
  NativeModalTitle,
  NativeModalTrigger,
};
