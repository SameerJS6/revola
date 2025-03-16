import React, { PropsWithChildren } from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";

export default function DocLayout({ children }: PropsWithChildren) {
  return (
    <DocsLayout
      githubUrl="https://github.com/SameerJS6"
      sidebar={{ hideSearch: true, defaultOpenLevel: 1 }}
      nav={{ title: "Native-modal" }}
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  );
}
