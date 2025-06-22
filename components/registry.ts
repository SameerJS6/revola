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

export const Index: Record<string, Registry> = {
  "default-demo": {
    name: "default-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/default/default-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/default/default-demo")),
    source: "",
    meta: undefined,
  },
  "side-drawer-demo": {
    name: "side-drawer-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/default/side-drawer-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/default/side-drawer-demo")),
    source: "",
    meta: undefined,
  },
  "scrollable-demo": {
    name: "scrollable-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/default/scrollable-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/default/scrollable-demo")),
    source: "",
    meta: undefined,
  },
  "controlled-demo": {
    name: "controlled-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/default/controlled-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/default/controlled-demo")),
    source: "",
    meta: undefined,
  },
  "default-snap-points-demo": {
    name: "default-snap-points-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/snap-points/default.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/snap-points/default")),
    source: "",
    meta: undefined,
  },
  "interact-with-background-snap-points-demo": {
    name: "interact-with-background-snap-points-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/snap-points/interact-with-background.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/snap-points/interact-with-background")),
    source: "",
    meta: undefined,
  },
  "snap-to-sequential-points-snap-points-demo": {
    name: "snap-to-sequential-points-snap-points-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/snap-points/snap-to-sequential-points.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(
      () => import("@/components/native-modal/examples/vaul/snap-points/snap-to-sequential-points")
    ),
    source: "",
    meta: undefined,
  },
  "custom-fade-index-snap-points-demo": {
    name: "custom-fade-index-snap-points-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/snap-points/custom-fade-index.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/snap-points/custom-fade-index")),
    source: "",
    meta: undefined,
  },

  "default-input-demo": {
    name: "default-input-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/inputs/default.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/inputs/default")),
    source: "",
    meta: undefined,
  },
  "no-repositioning-input-demo": {
    name: "no-repositioning-input-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/inputs/no-repositioning.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/inputs/no-repositioning")),
    source: "",
    meta: undefined,
  },
  "other-default-demo": {
    name: "other-default-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/other/default.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/other/default")),
    source: "",
    meta: undefined,
  },
  "non-dismissible-default-demo": {
    name: "non-dismissible-default-demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/examples/vaul/other/non-dismissiable.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/native-modal/examples/vaul/other/non-dismissiable")),
    source: "",
    meta: undefined,
  },
};
