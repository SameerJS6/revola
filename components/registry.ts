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
  demo: {
    name: "demo",
    description: "",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "components/native-modal/index.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/components/mobile-preview")),
    source: "",
    meta: undefined,
  },
};
