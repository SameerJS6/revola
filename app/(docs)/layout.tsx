"use client";

import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { PropsWithChildren } from "react";

export default function DocLayout({ children }: PropsWithChildren) {
  return (
    <DocsLayout
      sidebar={{
        collapsible: true,
        className: "[--fd-sidebar-width:250px]",
      }}
      nav={{
        title: "Revola",
        url: "/",
      }}
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  );
}
