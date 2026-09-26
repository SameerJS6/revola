import type { PropsWithChildren } from "react";

import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { source } from "@/lib/source";

export default function DocLayout({ children }: PropsWithChildren) {
  return (
    <DocsLayout
      containerProps={{
        className: "[--fd-layout-width:100%]",
      }}
      sidebar={{
        collapsible: true,
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
