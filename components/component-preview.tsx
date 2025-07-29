"use client";

import * as React from "react";
import { Tabs } from "@base-ui-components/react/tabs";

import { Loader } from "lucide-react";

import MobilePreview from "@/components/mobile-preview";
import { Index, type RegistryKeys } from "@/components/registry";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: RegistryKeys;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
}

interface Code extends React.ReactElement {
  props: {
    children: string;
  } & Record<string, boolean | string>;
}
export default function ComponentPreview({
  name,
  children,
  className,
  align = "center",
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const Codes = React.Children.toArray(children) as Code[];
  const Code = Codes[0];

  const Preview = React.useMemo(() => {
    const Component = Index[name]?.component;

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{name}</code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <div className={cn("group relative my-4 flex flex-col space-y-2", className)} {...props}>
      <Tabs.Root defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          {!hideCode && (
            <Tabs.List className="relative z-0 w-full justify-start rounded-none border-b bg-transparent p-0">
              <Tabs.Tab
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-2 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </Tabs.Tab>
              <Tabs.Tab
                value="code"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-2 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Code
              </Tabs.Tab>
              <Tabs.Indicator className="absolute left-0 top-1/2 z-[-1] h-7 w-[var(--active-tab-width)] -translate-y-1/2 translate-x-[var(--active-tab-left)] rounded-md border border-fd-border bg-fd-secondary/50 transition-all duration-200 ease-in-out" />
            </Tabs.List>
          )}
        </div>
        <Tabs.Panel value="preview" className="relative rounded-md border bg-border/50">
          <div className="absolute right-4 top-4 max-lg:hidden">
            <MobilePreview name={name} />
          </div>
          <div
            className={cn("preview flex min-h-[350px] w-full justify-center p-10", {
              "items-center": align === "center",
              "items-start": align === "start",
              "items-end": align === "end",
            })}
          >
            <React.Suspense
              fallback={
                <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_figure]:my-0 [&_figure_figure]:my-0 [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre_code]:font-geist-mono">
              {Code}
            </div>
          </div>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
}
