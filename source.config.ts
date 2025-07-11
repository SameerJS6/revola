import { z } from "zod";

import { rehypeCode, remarkGfm } from "fumadocs-core/mdx-plugins";
import { fileGenerator, remarkDocGen, remarkInstall } from "fumadocs-docgen";
import { defineConfig, defineDocs, frontmatterSchema } from "fumadocs-mdx/config";
import { rehypePrettyCode } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";

import { rehypeComponent } from "@/lib/rehype-component";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      ogDescription: z.string().min(1),
      links: z
        .object({
          dialog: z.string().optional(),
          drawer: z.string().optional(),
        })
        .optional(),
      subdescription: z.string().optional(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "github-light-default",
        dark: "github-dark",
      },
    },
    rehypePlugins: [
      rehypeCode,
      rehypeComponent,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light-default",
          },
        },
      ],
    ],
    // rehypePlugins: [
    //   rehypeCode,
    //   rehypeSlug,
    //   rehypeComponent,
    //   [
    //     rehypePrettyCode,
    //     {
    //       theme: {
    //         dark: "github-dark",
    //         light: "github-light-default",
    //       },
    //       getHighlighter: () =>
    //         getHighlighter({
    //           themes: ["github-dark", "github-light-default"],
    //         }),
    //       onVisitLine(node: { children: { length: number } }) {
    //         // Prevent lines from collapsing in `display: grid` mode, and allow empty
    //         // lines to be copy/pasted
    //         if (node.children.length === 0) {
    //           node.children = [{ type: "text", value: " " }];
    //         }
    //       },
    //       onVisitHighlightedLine(node: { properties: { className: string[] } }) {
    //         node.properties.className.push("line--highlighted");
    //       },
    //       onVisitHighlightedWord(node: { properties: { className: string[] } }) {
    //         node.properties.className = ["word--highlighted"];
    //       },
    //     },
    //   ],
    // ],
    remarkPlugins: [
      codeImport,
      remarkGfm,
      [remarkInstall, { persist: { id: "package-manager" } }],
      [remarkDocGen, { generators: [fileGenerator()] }],
    ],
  },
});
