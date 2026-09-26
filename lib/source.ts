import type { ReactNode } from "react";
import { createElement } from "react";
import { docs } from "@/.source/server";

import { icons } from "lucide-react";

import { type InferPageType, loader } from "fumadocs-core/source";

type Tree = typeof source;

const source = loader({
  baseUrl: "/docs",
  icon(icon) {
    if (!icon) return;

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  source: docs.toFumadocsSource(),
});

type Page = InferPageType<typeof source> & {
  data: {
    ogDescription: string;
    links?: {
      dialog?: string;
      drawer?: string;
      docs?: string;
    };
    subdescription?: string;
    body: (props: { components?: Record<string, unknown> }) => ReactNode;
    toc: Array<{ title: string; url: string; depth: number }>;
    full?: boolean;
  };
};

export { source, type Tree, type Page };
