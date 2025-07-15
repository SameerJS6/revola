/**
 * @see https://github.com/shadcn-ui/ui/blob/main/apps/www/lib/rehype-component.ts
 */

import fs from "node:fs";
import path from "node:path";

import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import { Index, type RegistryKeys } from "@/components/registry";

import type { UnistNode, UnistTree } from "@/types/unist";

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
          source = source.replaceAll("registry/revola", "components/ui/revola");
          source = source.replaceAll("export default", "export");
          // Remove .js extensions from all Next.js imports for cleaner installed code
          source = source.replace(/from ["']next\/([^"']+)\.js["']/g, 'from "next/$1"');

          // Clean up verbose comments
          source = cleanUpComments(source);

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

function cleanUpComments(source: string): string {
  // Remove comments that start with // and end with ; (verbose explanatory comments)
  source = source.replace(/\/\/.*?;/gs, "");

  // Remove multi-line comments /* ... */
  // source = source.replace(/\/\*[\s\S]*?\*\//g, "");

  // Clean up any empty lines that might be left after comment removal
  // source = source.replace(/^\s*\n/gm, "");

  // Remove excessive blank lines (more than 2 consecutive)
  // source = source.replace(/\n{3,}/g, "\n\n");

  return source;
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
