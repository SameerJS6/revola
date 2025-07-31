"use client";

import * as React from "react";

import { ArrowUpRightIcon, CircleFadingPlusIcon, FileInputIcon, FolderPlusIcon, SearchIcon } from "lucide-react";

import {
  ResponsiveCommandDialog,
  ResponsiveCommandEmpty,
  ResponsiveCommandGroup,
  ResponsiveCommandInput,
  ResponsiveCommandItem,
  ResponsiveCommandList,
  ResponsiveCommandSeparator,
  ResponsiveCommandShortcut,
} from "@/components/ui/responsive-command";

export default function SearchCommandExample() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        className="shadow-xs inline-flex h-9 w-fit rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-[color,box-shadow] placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <SearchIcon className="-ms-1 me-3 text-muted-foreground/80" size={16} aria-hidden="true" />
          <span className="font-normal text-muted-foreground/70">Search</span>
        </span>
        <kbd className="not-prose -me-1 ms-12 inline-flex h-5 max-h-full items-center rounded border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
          ⌘K
        </kbd>
      </button>
      <ResponsiveCommandDialog open={open} onOpenChange={setOpen}>
        <ResponsiveCommandInput placeholder="Type a command or search..." />
        <ResponsiveCommandList>
          <ResponsiveCommandEmpty>No results found.</ResponsiveCommandEmpty>
          <ResponsiveCommandGroup heading="Quick start">
            <ResponsiveCommandItem>
              <FolderPlusIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>New folder</span>
              <ResponsiveCommandShortcut className="justify-center">⌘N</ResponsiveCommandShortcut>
            </ResponsiveCommandItem>
            <ResponsiveCommandItem>
              <FileInputIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Import document</span>
              <ResponsiveCommandShortcut className="justify-center">⌘I</ResponsiveCommandShortcut>
            </ResponsiveCommandItem>
            <ResponsiveCommandItem>
              <CircleFadingPlusIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Add block</span>
              <ResponsiveCommandShortcut className="justify-center">⌘B</ResponsiveCommandShortcut>
            </ResponsiveCommandItem>
          </ResponsiveCommandGroup>
          <ResponsiveCommandSeparator />
          <ResponsiveCommandGroup heading="Navigation">
            <ResponsiveCommandItem>
              <ArrowUpRightIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Go to dashboard</span>
            </ResponsiveCommandItem>
            <ResponsiveCommandItem>
              <ArrowUpRightIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Go to apps</span>
            </ResponsiveCommandItem>
            <ResponsiveCommandItem>
              <ArrowUpRightIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Go to connections</span>
            </ResponsiveCommandItem>
          </ResponsiveCommandGroup>
        </ResponsiveCommandList>
      </ResponsiveCommandDialog>
    </>
  );
}
