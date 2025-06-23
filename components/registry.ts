import * as React from "react";

type RegistryType = "registry:demo" | "registry:component";

interface Registry {
  name: string;
  description: string;
  type: RegistryType;
  registryDependencies?: string[];
  files: { path: string; type: RegistryType; target: string }[];
  categories?: string[];
  component: React.LazyExoticComponent<() => React.JSX.Element>;
  source: string;
  meta?: string;
}

export type RegistryKeys =
  | "default-demo"
  | "side-drawer-demo"
  | "scrollable-demo"
  | "controlled-demo"
  | "default-snap-points-demo"
  | "interact-with-background-snap-points-demo"
  | "snap-to-sequential-points-snap-points-demo"
  | "custom-fade-index-snap-points-demo"
  | "default-input-demo"
  | "no-repositioning-input-demo"
  | "other-default-demo"
  | "non-dismissible-default-demo";

export const Index: Record<RegistryKeys, Registry> = {
  "default-demo": {
    name: "default-demo",
    description: "Default responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/default/default-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/default/default-demo")),
    source: "",
    meta: undefined,
  },
  "side-drawer-demo": {
    name: "side-drawer-demo",
    description: "Side drawer responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/default/side-drawer-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/default/side-drawer-demo")),
    source: "",
    meta: undefined,
  },
  "scrollable-demo": {
    name: "scrollable-demo",
    description: "Scrollable responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/default/scrollable-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/default/scrollable-demo")),
    source: "",
    meta: undefined,
  },
  "controlled-demo": {
    name: "controlled-demo",
    description: "Controlled responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/default/controlled-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/default/controlled-demo")),
    source: "",
    meta: undefined,
  },
  "default-snap-points-demo": {
    name: "default-snap-points-demo",
    description: "Default snap points responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/snap-points/default.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/snap-points/default")),
    source: "",
    meta: undefined,
  },
  "interact-with-background-snap-points-demo": {
    name: "interact-with-background-snap-points-demo",
    description: "Interactive background snap points demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/snap-points/interact-with-background.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/snap-points/interact-with-background")),
    source: "",
    meta: undefined,
  },
  "snap-to-sequential-points-snap-points-demo": {
    name: "snap-to-sequential-points-snap-points-demo",
    description: "Sequential snap points demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/snap-points/snap-to-sequential-points.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/snap-points/snap-to-sequential-points")),
    source: "",
    meta: undefined,
  },
  "custom-fade-index-snap-points-demo": {
    name: "custom-fade-index-snap-points-demo",
    description: "Custom fade index snap points demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/snap-points/custom-fade-index.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/snap-points/custom-fade-index")),
    source: "",
    meta: undefined,
  },
  "default-input-demo": {
    name: "default-input-demo",
    description: "Default input responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/inputs/default.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/inputs/default")),
    source: "",
    meta: undefined,
  },
  "no-repositioning-input-demo": {
    name: "no-repositioning-input-demo",
    description: "No repositioning input demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/inputs/no-repositioning.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/inputs/no-repositioning")),
    source: "",
    meta: undefined,
  },
  "other-default-demo": {
    name: "other-default-demo",
    description: "Other default responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/other/default.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/other/default")),
    source: "",
    meta: undefined,
  },
  "non-dismissible-default-demo": {
    name: "non-dismissible-default-demo",
    description: "Non-dismissible responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/other/non-dismissiable.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/other/non-dismissiable")),
    source: "",
    meta: undefined,
  },
};
