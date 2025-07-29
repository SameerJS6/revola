"use client";

import type { PropsWithChildren } from "react";

import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { source } from "@/lib/source";

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
      githubUrl="https://github.com/SameerJS6/revola"
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  );
}
