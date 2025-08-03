"use server";

import "server-only";

import { readFile } from "fs/promises";
import path from "path";
import type { JSX } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { codeToHast, type BundledLanguage } from "shiki/bundle/web";

async function highlight(code: string, lang: BundledLanguage) {
  const hast = await codeToHast(code, {
    lang,
    defaultColor: false,
    themes: {
      light: "github-light-default",
      dark: "github-dark",
    },
  });

  return toJsxRuntime(hast, {
    Fragment,
    jsx,
    jsxs,
  }) as JSX.Element;
}

async function getComponentCode(
  name: string,
  lang: BundledLanguage
): Promise<{ code: string; highlightedCode: JSX.Element } | null> {
  try {
    const filePath = path.join(process.cwd(), "public", "r", `${name}.json`);
    const fileContent = await readFile(filePath, "utf-8");
    const data = JSON.parse(fileContent);

    const rawContent = data.files[0].content || "";

    if (!rawContent.trim()) {
      return null;
    }

    const codeContent = convertRegistryPaths(rawContent);
    const highlighted = await highlight(codeContent, lang);

    return {
      code: codeContent,
      highlightedCode: highlighted,
    };
  } catch (error) {
    console.error("Failed to load code:", error);
    return null;
  }
}

const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, "@/components/ui")
    .replace(/@\/registry\/default\/compositions/g, "@/components")
    .replace(/@\/registry\/default\/hooks/g, "@/hooks")
    .replace(/@\/registry\/default\/lib/g, "@/lib");
};

export { highlight, getComponentCode, convertRegistryPaths };
