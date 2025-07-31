"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { ArrowRight, CornerDownLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ResponsiveCommand,
  ResponsiveCommandEmpty,
  ResponsiveCommandGroup,
  ResponsiveCommandInput,
  ResponsiveCommandItem,
  ResponsiveCommandList,
} from "@/components/ui/command";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";
import { Separator } from "@/components/ui/separator";
import { type Color, type ColorPalette } from "@/lib/colors";
import { source, type Tree } from "@/lib/source";
import { cn } from "@/lib/utils";

import { useIsMac } from "@/hooks/use-is-mac";
import { useMutationObserver } from "@/hooks/use-mutation-observer";

type TreeNode = (typeof source.pageTree)["children"][number];

function copyToClipboardWithoutMeta(value: string) {
  navigator.clipboard.writeText(value);
}

type SimplifiedGroup = {
  name: string;
  children: Array<{
    type: "page";
    name: string;
    url: string;
    icon?: React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
  }>;
};

type CommandMenuProps = {
  tree: Tree["pageTree"];
  colors: ColorPalette[];
};

// Transform the mixed tree structure into simplified groups
function simplifyTreeStructure(tree: TreeNode[]): SimplifiedGroup[] {
  const groups: SimplifiedGroup[] = [];
  let currentGroup: SimplifiedGroup | null = null;

  for (const item of tree) {
    switch (item.type) {
      case "separator": {
        currentGroup = {
          name: item.name?.toString() || "Untitled",
          children: [],
        };
        groups.push(currentGroup);
        break;
      }
      case "page": {
        if (currentGroup) {
          currentGroup.children.push({
            type: "page",
            name: item.name?.toString() || "Untitled",
            url: item.url,
            ...(item.icon && { icon: item.icon }),
          });
        } else {
          groups.push({
            name: item.name?.toString() || "Untitled",
            children: [
              {
                type: "page",
                name: item.name?.toString() || "Untitled",
                url: item.url,
                ...(item.icon && { icon: item.icon }),
              },
            ],
          });
        }
        break;
      }
      case "folder": {
        const folderPages = item.children?.filter((child) => child.type === "page" && "url" in child) || [];

        groups.push({
          name: item.name?.toString() || "Untitled",
          children: folderPages.map((page) => ({
            type: "page" as const,
            name: page.name?.toString() || "Untitled",
            url: (page as any).url,
            ...(page.icon && { icon: page.icon }),
          })),
        });

        currentGroup = null;
        break;
      }
      default:
        return groups;
    }
  }

  return groups;
}

export default function CommandMenu({ tree, colors }: CommandMenuProps) {
  const [open, setOpen] = React.useState(false);
  const [copyPayload, setCopyPayload] = React.useState("");
  const [selectedType, setSelectedType] = React.useState<"color" | "page" | null>(null);

  const isMac = useIsMac();
  const router = useRouter();

  const handlePageHighlight = React.useCallback(() => {
    setSelectedType("page");
    setCopyPayload("");
  }, [setSelectedType, setCopyPayload]);

  const handleColorHighlight = React.useCallback(
    (color: Color) => {
      setSelectedType("color");
      setCopyPayload(color.className);
    },
    [setSelectedType, setCopyPayload]
  );

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }

      if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
        runCommand(() => {
          if (selectedType === "color" || selectedType === "page") {
            copyToClipboardWithoutMeta(copyPayload);
          }
        });
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [copyPayload, runCommand, selectedType]);

  const listRef = React.useRef<HTMLDivElement>(null);
  const scrollId = React.useRef<ReturnType<typeof setTimeout>>(null);

  const simplifiedTree = simplifyTreeStructure(tree.children);

  return (
    <ResponsiveDialog shouldScaleBackground={false} open={open} onOpenChange={setOpen}>
      <ResponsiveDialogTrigger asChild>
        <Button
          variant="secondary"
          className={cn(
            "relative h-11 w-full justify-start rounded-lg bg-secondary pl-2.5 font-normal text-secondary-foreground/60 shadow-none dark:bg-card sm:pr-12 md:w-40 lg:w-56 xl:w-64"
          )}
          onClick={() => setOpen(true)}
        >
          <span className="hidden lg:inline-flex">Search documentation...</span>
          <span className="inline-flex lg:hidden">Search...</span>
          <div className="absolute right-1.5 top-1/2 hidden -translate-y-1/2 gap-1 sm:flex">
            <CommandMenuKbd>{isMac ? "⌘" : "Ctrl"}</CommandMenuKbd>
            <CommandMenuKbd className="aspect-square">K</CommandMenuKbd>
          </div>
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent
        showCloseButton={false}
        className="overflow-hidden rounded-t-2xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800 sm:rounded-xl"
      >
        <ResponsiveDialogHeader className="sr-only">
          <ResponsiveDialogTitle>Search documentation...</ResponsiveDialogTitle>
          <ResponsiveDialogDescription>Search for a command to run...</ResponsiveDialogDescription>
        </ResponsiveDialogHeader>
        <ResponsiveCommand
          filter={(value, search, keywords) => {
            const extendValue = value + " " + (keywords?.join(" ") || "");
            if (extendValue.toLowerCase().includes(search.toLowerCase())) {
              return 1;
            }
            return 0;
          }}
          className="rounded-none bg-transparent [&_[cmdk-input-wrapper]]:mb-0 [&_[cmdk-input-wrapper]]:!h-9 [&_[cmdk-input-wrapper]]:rounded-md [&_[cmdk-input-wrapper]]:border [&_[cmdk-input-wrapper]]:border-input [&_[cmdk-input-wrapper]]:bg-input/50 [&_[cmdk-input-wrapper]]:px-3 [&_[cmdk-input]]:!h-9 [&_[cmdk-input]]:py-0"
        >
          <ResponsiveCommandInput
            onValueChange={(e) => {
              e === "" && setCopyPayload("");

              if (scrollId.current) {
                clearTimeout(scrollId.current);
              }

              scrollId.current = setTimeout(() => {
                if (listRef.current) {
                  listRef.current?.scrollTo({ top: 0 });
                }
              }, 0);
            }}
            placeholder="Search documentation..."
          />
          <ResponsiveCommandList ref={listRef} className="min-h-80 scroll-pb-1.5 scroll-pt-2 no-scrollbar">
            <ResponsiveCommandEmpty className="py-12 text-center text-sm text-muted-foreground">
              No results found.
            </ResponsiveCommandEmpty>

            {simplifiedTree.map((group, index) => {
              return (
                <ResponsiveCommandGroup
                  heading={group.name}
                  key={group.name + index}
                  className="!p-0 [&_[cmdk-group-heading]]:scroll-mt-16 [&_[cmdk-group-heading]]:!p-3 [&_[cmdk-group-heading]]:!pb-1"
                >
                  {group.children.map((item) => {
                    if (item.type === "page") {
                      return (
                        <CommandMenuItem
                          key={item.url}
                          keywords={undefined}
                          onHighlight={handlePageHighlight}
                          value={item.name?.toString() ? `${group.name} ${item.name}` : ""}
                          onSelect={() => {
                            runCommand(() => router.push(item.url));
                          }}
                        >
                          <ArrowRight />
                          {item.name}
                        </CommandMenuItem>
                      );
                    }
                    return null;
                  })}
                </ResponsiveCommandGroup>
              );
            })}

            {colors.map((colorPalette) => (
              <ResponsiveCommandGroup
                key={colorPalette.name}
                heading={colorPalette.name.charAt(0).toUpperCase() + colorPalette.name.slice(1)}
                className="!p-0 [&_[cmdk-group-heading]]:!p-3"
              >
                {colorPalette.colors.map((color) => (
                  <CommandMenuItem
                    key={color.hex}
                    value={color.className}
                    keywords={["color", color.name, color.className]}
                    onHighlight={() => handleColorHighlight(color)}
                    onSelect={() => {
                      runCommand(() => copyToClipboardWithoutMeta(color.oklch));
                    }}
                  >
                    <div
                      className="aspect-square size-4 rounded-sm border-border bg-[var(--color)] after:rounded-sm"
                      style={{ "--color": color.oklch } as React.CSSProperties}
                    />
                    {color.className}
                    <span className="ml-auto font-mono text-xs font-normal tabular-nums text-muted-foreground">
                      {color.oklch}
                    </span>
                  </CommandMenuItem>
                ))}
              </ResponsiveCommandGroup>
            ))}
          </ResponsiveCommandList>
        </ResponsiveCommand>

        <div className="absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 border-t border-t-neutral-100 bg-neutral-50 px-4 text-xs font-medium text-muted-foreground dark:border-t-neutral-700 dark:bg-neutral-800 sm:rounded-b-xl">
          <div className="flex items-center gap-2">
            <CommandMenuKbd>
              <CornerDownLeftIcon />
            </CommandMenuKbd>
            {selectedType === "page" ? "Go to Page" : null}
            {selectedType === "color" ? "Copy OKLCH" : null}
          </div>
          {copyPayload && (
            <>
              <Separator orientation="vertical" className="!h-4" />
              <div className="flex items-center gap-1">
                <CommandMenuKbd>{isMac ? "⌘" : "Ctrl"}</CommandMenuKbd>
                <CommandMenuKbd>C</CommandMenuKbd>
                {copyPayload}
              </div>
            </>
          )}
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}

function CommandMenuItem({
  children,
  className,
  onHighlight,
  ...props
}: React.ComponentProps<typeof ResponsiveCommandItem> & {
  onHighlight?: () => void;
  "data-selected"?: string;
  "aria-selected"?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  useMutationObserver(ref, (mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-selected" &&
        ref.current?.getAttribute("aria-selected") === "true"
      ) {
        onHighlight?.();
      }
    });
  });

  return (
    <ResponsiveCommandItem
      ref={ref}
      className={cn(
        "h-9 rounded-md border border-transparent !px-3 font-medium data-[selected=true]:border-input data-[selected=true]:bg-input/50",
        className
      )}
      {...props}
    >
      {children}
    </ResponsiveCommandItem>
  );
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "not-prose pointer-events-none flex h-5 select-none items-center justify-center gap-1 rounded border bg-background px-1 font-sans text-[0.7rem] font-medium text-muted-foreground [&_svg:not([class*='size-'])]:size-3",
        className
      )}
      {...props}
    />
  );
}
