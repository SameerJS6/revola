import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";

import { ArrowLeft, ArrowRight, SquareArrowOutUpRight } from "lucide-react";

import { findNeighbour } from "fumadocs-core/server";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";

import { Button } from "@/components/ui/button";
import ComponentPreview from "@/components/component-preview";
import MarkdownAccordion from "@/components/markdown-accordion";
import { source } from "@/lib/source";
import { absoluteUrl, cn } from "@/lib/utils";

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.ogDescription,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(page.data.title)}&description=${encodeURIComponent(page.data.ogDescription)}`,
        },
      ],
    },
    twitter: {
      title: page.data.title,
      description: page.data.ogDescription,
      card: "summary_large_image",
      images: [
        {
          url: `/og?title=${encodeURIComponent(page.data.title)}&description=${encodeURIComponent(page.data.ogDescription)}`,
        },
      ],
      creator: "@sameerjs6",
    },
  };
}

export default async function DocIndividualPage(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDXContent = page.data.body;
  const referenceLinks = page.data?.links;
  const neighbours = findNeighbour(source.pageTree, page.url);

  return (
    <DocsPage
      toc={page.data.toc}
      breadcrumb={{ enabled: false, includePage: true }}
      tableOfContentPopover={{ enabled: false }}
      tableOfContent={
        page.data.toc.length > 0
          ? {
              header: <div className="h-4 w-10"></div>,
            }
          : {}
      }
      footer={{ enabled: false }}
      full={page.data.full}
      article={{ className: "mx-auto max-w-[800px] mt-4" }}
    >
      <div className="mb-8 space-y-3 lg:space-y-4">
        <DocsTitle className="font-semibold">{page.data.title}</DocsTitle>
        <div className={cn(referenceLinks && "space-y-2.5")}>
          <div className="space-y-1">
            <DocsDescription className={cn("mb-0 text-base")}>{page.data.description}</DocsDescription>
            {page.data?.subdescription && (
              <DocsDescription className={cn("mb-0 text-base")}>{page.data?.subdescription}</DocsDescription>
            )}
          </div>
          <div className="flex items-center gap-2">
            {referenceLinks && referenceLinks.dialog && (
              <Link
                href={referenceLinks.dialog}
                target="_blank"
                className="flex items-center gap-1.5 rounded bg-accent px-2 py-1 text-xs font-medium text-accent-foreground"
              >
                Dialog API
                <SquareArrowOutUpRight className="size-3" />
              </Link>
            )}
            {referenceLinks && referenceLinks.drawer && (
              <Link
                href={referenceLinks.drawer}
                target="_blank"
                className="flex items-center gap-1.5 rounded bg-accent px-2 py-1 text-xs font-medium text-accent-foreground"
              >
                Drawer API
                <SquareArrowOutUpRight className="size-3" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            Accordions,
            Accordion,
            MarkdownAccordion,
            Steps,
            Step,
            Tab,
            Tabs,
            a: (props) => <Link target={props.href.startsWith("https") ? "_blank" : "_self"} {...props} />,
            // AutoTypeTable,
            img: (props) => <ImageZoom className="rounded-3xl" {...props} />,
            code: ({ ref, ...props }) => (
              <code
                ref={ref}
                className="border border-primary/15 bg-secondary/50 py-[1.5px] font-geist-mono text-secondary-foreground"
                {...props}
              />
            ),
            pre: ({ ref, children, ...props }) => (
              <CodeBlock ref={ref} {...props}>
                <Pre className="*:border-none *:bg-transparent *:py-[3px] has-[[data-slot=tabs]]:p-0 has-[[data-highlighted-line]]:px-0 has-[[data-line-numbers]]:px-0">
                  {children}
                </Pre>
              </CodeBlock>
            ),
            TypeTable,
            ComponentPreview,
            Button,
          }}
        />
      </DocsBody>

      <div className="mx-auto flex h-16 w-full max-w-[800px] items-center gap-2 px-4">
        {neighbours.previous && (
          <Button variant="secondary" size="sm" asChild className="shadow-none">
            <Link href={neighbours.previous.url}>
              <ArrowLeft /> {neighbours.previous.name}
            </Link>
          </Button>
        )}
        {neighbours.next && (
          <Button variant="secondary" size="sm" className="ml-auto shadow-none" asChild>
            <Link href={neighbours.next.url}>
              {neighbours.next.name} <ArrowRight />
            </Link>
          </Button>
        )}
      </div>
    </DocsPage>
  );
}
