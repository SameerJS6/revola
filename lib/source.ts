import { createElement } from "react";
import { docs } from "@/.source";

import { icons } from "lucide-react";

import { loader } from "fumadocs-core/source";

type Tree = typeof source;

const source = loader({
  baseUrl: "/docs",
  icon(icon) {
    if (!icon) return;

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  source: docs.toFumadocsSource(),
});

export { source, type Tree };
