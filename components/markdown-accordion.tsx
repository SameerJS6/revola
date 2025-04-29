import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeInfo } from "lucide-react";
import { PropsWithChildren, ReactNode } from "react";

export default function MarkdownAccordion({ children, title }: { children: ReactNode; title: string }) {
  return (
    <Accordion type="single" collapsible className="rounded-lg bg-fd-card px-4 shadow">
      <AccordionItem value="if-you-haven't-installed-shadcn" className="border-none">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-2">
            <BadgeInfo size={20} className="fill-blue-500 text-fd-card" /> {title}
          </div>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
