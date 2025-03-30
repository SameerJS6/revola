import { rehypeComponent } from "@/lib/rehype-component";
import { getHighlighter } from "@shikijs/compat";
import { rehypeCode, remarkGfm } from "fumadocs-core/mdx-plugins";
import { fileGenerator, remarkDocGen, remarkInstall } from "fumadocs-docgen";
import { defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import { rehypePrettyCode } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      links: z
        .object({
          dialog: z.string().optional(),
          drawer: z.string().optional(),
        })
        .optional(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    rehypePlugins: [
      rehypeCode,
      rehypeSlug,
      rehypeComponent,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          getHighlighter: () =>
            getHighlighter({
              themes: ["github-dark", "github-light"],
            }),
          onVisitLine(node: { children: { length: number } }) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: { properties: { className: string[] } }) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: { properties: { className: string[] } }) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
    ],
    remarkPlugins: [
      codeImport,
      remarkGfm,
      [remarkInstall, { persist: { id: "package-manager" } }],
      [remarkDocGen, { generators: [fileGenerator()] }],
    ],
    // rehypeCodeOptions: {
    //   themes: {
    //     dark: "github-dark",
    //     light: "github-light",
    //   },
    // },
  },
});
