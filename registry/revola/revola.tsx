"use client";

import * as React from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Drawer as DrawerPrimitive, Content as VaulDrawerContent } from "vaul";
import { X } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import useMediaQuery from "@/hooks/use-media-query";

type DrawerType = React.ComponentProps<typeof DrawerPrimitive.Root>;

type ResponsiveDialogContextProps = {
  modal?: boolean;
  dismissible?: boolean;
  direction?: "top" | "right" | "bottom" | "left";
  onlyDrawer?: boolean;
  onlyDialog?: boolean;
  alert?: boolean;
};

type ResponsiveDialogProviderProps = {
  children: React.ReactNode;
} & ResponsiveDialogContextProps;

const ResponsiveDialogContext = React.createContext<ResponsiveDialogContextProps>({});
const MOBILE_BREAKPOINT = "(min-width: 640px)";

const ResponsiveDialogProvider = ({
  modal = true,
  dismissible = true,
  direction = "bottom",
  onlyDrawer = false,
  onlyDialog = false,
  alert = false,
  children,
}: ResponsiveDialogProviderProps) => {
  return (
    <ResponsiveDialogContext.Provider value={{ modal, dismissible, direction, onlyDrawer, onlyDialog, alert }}>
      {children}
    </ResponsiveDialogContext.Provider>
  );
};

const useResponsiveDialog = () => {
  const context = React.useContext(ResponsiveDialogContext);

  if (!context) {
    throw new Error("useResponsiveDialog must be used within a <ResponsiveDialog />");
  }

  return context;
};

const ResponsiveDialog = ({
  modal = true,
  dismissible = true,
  direction = "bottom",
  onlyDrawer = false,
  onlyDialog = false,
  alert = false,
  shouldScaleBackground = true,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  ...props
}: DrawerType & { onlyDrawer?: boolean; onlyDialog?: boolean; alert?: boolean }) => {
  const [internalState, setInternalState] = React.useState<boolean>(false);

  const isControlledOpen = typeof controlledOpen === "undefined";
  const toggleInternalState = () => setInternalState((prev) => !prev);

  const open = isControlledOpen ? internalState : controlledOpen;
  const onOpenChange = isControlledOpen ? toggleInternalState : controlledOnOpenChange;

  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const shouldUseDialog = onlyDialog || (!onlyDrawer && isMobile);
  const ResponsiveDialog = shouldUseDialog ? DialogPrimitive.Root : DrawerPrimitive.Root;

  const effectiveModal = alert ? true : modal;
  const effectiveDismissible = alert ? true : dismissible;

  return (
    <ResponsiveDialogProvider
      modal={effectiveModal}
      dismissible={effectiveDismissible}
      direction={direction}
      onlyDrawer={onlyDrawer}
      onlyDialog={onlyDialog}
      alert={alert}
    >
      <ResponsiveDialog
        modal={effectiveModal}
        direction={direction}
        dismissible={effectiveDismissible}
        shouldScaleBackground={shouldScaleBackground}
        open={open}
        onOpenChange={onOpenChange}
        {...props}
      />
    </ResponsiveDialogProvider>
  );
};
ResponsiveDialog.displayName = "ResponsiveDialog";

const ResponsiveDialogTrigger = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) => {
  const { onlyDrawer, onlyDialog } = useResponsiveDialog();
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const shouldUseDialog = onlyDialog || (!onlyDrawer && isMobile);
  const ResponsiveDialogTrigger = shouldUseDialog ? DialogPrimitive.Trigger : DrawerPrimitive.Trigger;
  return <ResponsiveDialogTrigger {...props} />;
};
ResponsiveDialogTrigger.displayName = "ResponsiveDialogTrigger";

const ResponsiveDialogPortal = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) => {
  const { onlyDrawer, onlyDialog } = useResponsiveDialog();
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const shouldUseDialog = onlyDialog || (!onlyDrawer && isMobile);
  const ResponsiveDialogPortal = shouldUseDialog ? DialogPrimitive.Portal : DrawerPrimitive.Portal;
  return <ResponsiveDialogPortal {...props} />;
};
ResponsiveDialogPortal.displayName = "ResponsiveDialogPortal";

const ResponsiveDialogOverlay = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) => {
  const { onlyDrawer, onlyDialog } = useResponsiveDialog();
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const shouldUseDialog = onlyDialog || (!onlyDrawer && isMobile);
  const ResponsiveDialogOverlay = shouldUseDialog ? DialogPrimitive.Overlay : DrawerPrimitive.Overlay;
  return (
    <ResponsiveDialogOverlay
      {...props}
      className={cn(
        "fixed inset-0 z-50 bg-black/50 sm:data-[state=open]:animate-in sm:data-[state=closed]:animate-out sm:data-[state=closed]:fade-out-0 sm:data-[state=open]:fade-in-0",
        className
      )}
    />
  );
};
ResponsiveDialogOverlay.displayName = "ResponsiveDialogOverlay";

const ResponsiveDialogClose = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) => {
  const { dismissible, alert, onlyDrawer, onlyDialog } = useResponsiveDialog();
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const shouldUseDialog = onlyDialog || (!onlyDrawer && isMobile);
  const ResponsiveDialogClose = shouldUseDialog ? DialogPrimitive.Close : DrawerPrimitive.Close;

  const shouldPreventClose = !dismissible && !alert;

  return (
    <ResponsiveDialogClose
      aria-label="Close"
      {...(shouldPreventClose && { onClick: (e) => e.preventDefault() })}
      {...props}
    />
  );
};
ResponsiveDialogClose.displayName = "ResponsiveDialogClose";

const ResponsiveDialogContentVariants = cva("fixed z-[9999] bg-background", {
  variants: {
    device: {
      desktop:
        "left-1/2 top-1/2 grid max-h-[calc(100%-4rem)] w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:max-w-lg",
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
        "inset-x-0 bottom-0 mt-24 h-fit max-h-[95%] flex-col rounded-t-[10px] border border-b-0 border-primary/10 pt-4",
    },
    {
      device: "mobile",
      direction: "top",
      className:
        "inset-x-0 top-0 mb-24 h-fit max-h-[95%] flex-col rounded-b-[10px] border border-b-0 border-primary/10",
    },
    {
      device: "mobile",
      direction: "left",
      className:
        "bottom-2 left-2 top-2 flex w-[310px] bg-transparent outline-none [--initial-transform:calc(100%+8px)]",
    },
    {
      device: "mobile",
      direction: "right",
      className: "bottom-2 right-2 top-2 w-[310px] bg-transparent outline-none [--initial-transform:calc(100%+8px)]",
    },
  ],
});

const ResponsiveDialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { showCloseButton?: boolean }
>(({ className, children, showCloseButton = true, ...props }, ref) => {
  const { direction, modal, dismissible, alert, onlyDrawer, onlyDialog } = useResponsiveDialog();

  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  const shouldUseDialog = onlyDialog || (!onlyDrawer && isMobile);
  const ResponsiveDialogContent = shouldUseDialog ? DialogPrimitive.Content : VaulDrawerContent;

  const shouldShowCloseButton = !alert && showCloseButton;
  const shouldPreventEscape = !dismissible && !alert;
  const shouldPreventOutsideInteraction = !modal || (!dismissible && !alert) || alert;

  return (
    <ResponsiveDialogPortal>
      <ResponsiveDialogOverlay />
      <ResponsiveDialogContent
        ref={ref}
        {...props}
        {...(shouldPreventEscape && shouldUseDialog && { onEscapeKeyDown: (e) => e.preventDefault() })}
        {...(shouldPreventOutsideInteraction &&
          shouldUseDialog && {
            onInteractOutside: (e) => e.preventDefault(),
          })}
        {...(!shouldUseDialog &&
          shouldPreventOutsideInteraction && {
            onPointerDownOutside: (e) => e.preventDefault(),
            onInteractOutside: (e) => e.preventDefault(),
          })}
        className={cn(
          ResponsiveDialogContentVariants({
            device: shouldUseDialog ? "desktop" : "mobile",
            direction,
          }),
          className
        )}
      >
        {!shouldUseDialog && direction === "bottom" && (
          <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-muted-foreground/25 pb-1.5 data-[vaul-handle]:h-1.5 data-[vaul-handle]:w-14 data-[vaul-handle]:pb-1.5 dark:bg-muted" />
        )}
        {children}
        {shouldShowCloseButton && (
          <ResponsiveDialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-white">
            <X className="size-4" />
            <span className="sr-only">close</span>
          </ResponsiveDialogClose>
        )}
      </ResponsiveDialogContent>
    </ResponsiveDialogPortal>
  );
});
ResponsiveDialogContent.displayName = "ResponsiveDialogContent";

const ResponsiveDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex flex-col gap-1.5 p-4 text-center sm:p-0 sm:text-left", className)} {...props} />;
};
ResponsiveDialogHeader.displayName = "ResponsiveDialogHeader";

const ResponsiveDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <footer
      className={cn(
        "flex flex-col-reverse gap-4 p-4 max-sm:mt-auto sm:flex-row sm:justify-end sm:gap-2 sm:p-0",
        className
      )}
      {...props}
    />
  );
};
ResponsiveDialogFooter.displayName = "ResponsiveDialogFooter";

const ResponsiveDialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => {
  const { onlyDrawer, onlyDialog } = useResponsiveDialog();
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const shouldUseDialog = onlyDialog || (!onlyDrawer && isMobile);
  const ResponsiveDialogTitle = shouldUseDialog ? DialogPrimitive.Title : DrawerPrimitive.Title;
  return (
    <ResponsiveDialogTitle
      ref={ref}
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
});

ResponsiveDialogTitle.displayName = "ResponsiveDialogTitle";

const ResponsiveDialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => {
  const { onlyDrawer, onlyDialog } = useResponsiveDialog();
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const shouldUseDialog = onlyDialog || (!onlyDrawer && isMobile);
  const ResponsiveDialogDescription = shouldUseDialog ? DialogPrimitive.Description : DrawerPrimitive.Description;
  return (
    <ResponsiveDialogDescription ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
});

ResponsiveDialogDescription.displayName = "ResponsiveDialogDescription";

export {
  ResponsiveDialog,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogOverlay,
  ResponsiveDialogPortal,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
};
