"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";

import { SearchIcon } from "lucide-react";

import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
} from "@/components/ui/revola";
import { cn } from "@/lib/utils";

const ResponsiveCommand = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive
      ref={ref}
      className={cn("flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className)}
      {...props}
    />
  );
});
ResponsiveCommand.displayName = CommandPrimitive.displayName;

const ResponsiveCommandDialog = React.forwardRef<
  React.ComponentRef<typeof ResponsiveDialog>,
  React.ComponentPropsWithoutRef<typeof ResponsiveDialog> & {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
  }
>(
  (
    {
      title = "Command Palette",
      description = "Search for a command to run...",
      children,
      className,
      showCloseButton = true,
      ...props
    },
    ref
  ) => {
    return (
      <ResponsiveDialog {...props}>
        <ResponsiveDialogContent
          ref={ref}
          showCloseButton={showCloseButton}
          className={cn("mx-auto overflow-hidden bg-popover sm:max-w-lg [&>button:last-child]:hidden", className)}
        >
          <ResponsiveDialogHeader className="sr-only">
            <ResponsiveDialogTitle>{title}</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>{description}</ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
          <ResponsiveCommand className="max-h-[100svh] [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-2">
            {children}
          </ResponsiveCommand>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    );
  }
);
ResponsiveCommandDialog.displayName = "ResponsiveCommandDialog";

const ResponsiveCommandInput = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
  return (
    <div className="flex items-center border-b border-input px-5" cmdk-input-wrapper="">
      <SearchIcon size={20} className="me-3 text-muted-foreground/80" />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground/70 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
});
ResponsiveCommandInput.displayName = CommandPrimitive.Input.displayName;

const ResponsiveCommandList = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.List
      ref={ref}
      className={cn("max-h-[320px] flex-1 overflow-y-auto overflow-x-hidden", className)}
      {...props}
    />
  );
});
ResponsiveCommandList.displayName = CommandPrimitive.List.displayName;

const ResponsiveCommandLoading = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Loading>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Loading>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Loading ref={ref} className={cn("py-6 text-center text-sm", className)} {...props} />
));

ResponsiveCommandLoading.displayName = CommandPrimitive.Loading.displayName;

const ResponsiveCommandEmpty = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ ...props }, ref) => {
  return <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />;
});
ResponsiveCommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const ResponsiveCommandGroup = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Group
      className={cn(
        "overflow-hidden p-2 text-foreground [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});
ResponsiveCommandGroup.displayName = CommandPrimitive.Group.displayName;

const ResponsiveCommandSeparator = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => {
  return <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />;
});
ResponsiveCommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const ResponsiveCommandItem = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center gap-3 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
});
ResponsiveCommandItem.displayName = CommandPrimitive.Item.displayName;

const ResponsiveCommandShortcut = ({ className, ...props }: React.ComponentProps<"kbd">) => {
  return (
    <kbd
      className={cn(
        "-me-1 ms-auto inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70",
        className
      )}
      {...props}
    />
  );
};

export {
  ResponsiveCommand,
  ResponsiveCommandDialog,
  ResponsiveCommandEmpty,
  ResponsiveCommandGroup,
  ResponsiveCommandInput,
  ResponsiveCommandItem,
  ResponsiveCommandList,
  ResponsiveCommandLoading,
  ResponsiveCommandSeparator,
  ResponsiveCommandShortcut,
};
