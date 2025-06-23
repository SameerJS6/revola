/**
 * @see https://github.com/shadcn-ui/ui/blob/main/apps/www/lib/rehype-component.ts
 */

import fs from "node:fs";
import path from "node:path";
import type { UnistNode, UnistTree } from "@/types/unist";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import { Index, RegistryKeys } from "@/components/registry";

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value as RegistryKeys;

        if (!name) {
          return null;
        }

        try {
          const component = Index[name];
          const src = component.files[0]?.path;

          // Read the source file.
          const filePath = src;
          let source = fs.readFileSync(filePath, "utf8");

          source = source.replaceAll("react-payment-inputs/lib/images/index.js", "react-payment-inputs/images");
          source = source.replaceAll(
            "// Using this import \(ES import\) to fix the `ERR_UNSUPPORTED_DIR_IMPORT` error from `rehype-component\.ts`, as it throws an error while parsing all imports at run/build time\. This workaround specifically addresses the Node\.js ES modules limitation\.",
            ""
          );
          source = source.replaceAll("export default", "export");

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

export function getComponentSourceFileContent(node: UnistNode) {
  const src = getNodeAttributeByName(node, "src")?.value as string;

  if (!src) {
    return null;
  }

  // Read the source file.
  const filePath = path.join(process.cwd(), src);
  const source = fs.readFileSync(filePath, "utf8");

  return source;
}
