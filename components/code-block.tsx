"use client";

import { useLayoutEffect, useRef, useState, type JSX } from "react";
import type { BundledLanguage } from "shiki/bundle/web";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CopyButton from "@/components/copy-button";
import { highlight } from "@/lib/code-highlight";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string | null;
  lang: BundledLanguage;
  initial?: JSX.Element;
  preHighlighted?: JSX.Element | null;
  className?: string;
};

export default function CodeBlock({ code, lang, initial, preHighlighted, className }: CodeBlockProps) {
  const [content, setContent] = useState<JSX.Element | null>(preHighlighted || initial || null);
  const areaRef = useRef<HTMLDivElement>(null);

  const onCopy = () => {
    const pre = areaRef.current?.getElementsByTagName("pre").item(0);

    if (!pre) return;

    const clone = pre.cloneNode(true) as HTMLElement;
    navigator.clipboard.writeText(clone.textContent || "");
  };

  useLayoutEffect(() => {
    if (preHighlighted) {
      setContent(preHighlighted);
      return;
    }

    let isMounted = true;

    if (code) {
      highlight(code, lang).then((result) => {
        if (isMounted) setContent(result);
      });
    } else {
      setContent(<pre className="rounded-md bg-black p-4">No code available</pre>);
    }

    return () => {
      isMounted = false;
    };
  }, [code, lang, preHighlighted]);

  return content ? (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-(--shiki-light-bg) whitespace-pre! dark:bg-fd-overlay [&_code]:font-jetbrains-mono [&_pre]:max-h-150 [&_pre]:rounded-md [&_pre]:bg-transparent! [&_pre]:p-4 [&_pre]:whitespace-pre",
        className
      )}
    >
      <ScrollArea ref={areaRef} dir="ltr" className="not-prose relative size-full rounded-lg border">
        {content}
        <ScrollBar orientation="horizontal" />
        <CopyButton className="absolute top-2 right-2 z-2 backdrop-blur-md" onCopy={onCopy} />
      </ScrollArea>
    </div>
  ) : (
    <div className="relative my-6 min-h-125 overflow-hidden rounded-lg border bg-black text-sm">
      <pre className="rounded-md text-center text-sm">Loading...</pre>
    </div>
  );
}
