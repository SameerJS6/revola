import { source } from "@/lib/source";
// import { AutoTypeTable } from "fumadocs-typescript/ui";
import ComponentPreview from "@/components/component-preview";
import { Button } from "@/components/ui/button";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { SquareArrowOutUpRight } from "lucide-react";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { TypeTable } from "fumadocs-ui/components/type-table";

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  return { title: page.data.title, description: page.data.description };
}

export default async function DocIndividualPage(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDXContent = page.data.body;
  const referenceLinks = page.data?.links;

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
      full={page.data.full}
      article={{ className: "max-w-[800px] mt-4" }}
    >
      <div className="mb-8 space-y-3 lg:space-y-4">
        <DocsTitle className="font-semibold">{page.data.title}</DocsTitle>
        <div className={cn(referenceLinks && "space-y-2.5")}>
          <DocsDescription className={cn("mb-0 text-base")}>{page.data.description}</DocsDescription>
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
                <Pre className="*:border-none *:bg-transparent *:py-[3px]">{children}</Pre>
              </CodeBlock>
            ),
            TypeTable,
            ComponentPreview,
            Button,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}
