import * as React from "react";

import CommandMenuWrapper from "@/registry/cmdk/examples/shadcn-command-menu-wrapper";

const specialRegistryKeys = ["shadcn-command-menu"] as const;
type SpecialRegistryKeys = (typeof specialRegistryKeys)[number];

// This is a special registry for components that are not part of the main registry mainly due to some sort of dependency issue let that be passing the content of file or `Getting/Loader` issue from Fumadocs.

interface SpecialRegistry {
  name: string;
  description: string;
  component: React.ComponentType<() => React.JSX.Element>;
  categories?: string[];
  meta?: string;
}

const SpecialIndex: Record<SpecialRegistryKeys, SpecialRegistry> = {
  "shadcn-command-menu": {
    name: "shadcn-command-menu",
    description: "Command menu demo",
    component: CommandMenuWrapper,
    categories: ["command"],
    meta: "Special component that uses source.ts",
  },
};

function isSpecialComponent(name: string): name is SpecialRegistryKeys {
  return specialRegistryKeys.includes(name as SpecialRegistryKeys);
}

function getSpecialComponent(name: SpecialRegistryKeys) {
  return SpecialIndex[name];
}

export { SpecialIndex, isSpecialComponent, getSpecialComponent, type SpecialRegistryKeys, type SpecialRegistry };
