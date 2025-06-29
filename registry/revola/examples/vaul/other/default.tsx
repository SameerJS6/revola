import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";

export default function VaulOtherDemo() {
  return (
    <ResponsiveDialog shouldScaleBackground={false} modal={false}>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Vaul Non-Modal Demo
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent>
        <div className="flex flex-col p-6">
          <ResponsiveDialogHeader className="space-y-4 p-0 text-left">
            <ResponsiveDialogTitle className="font-medium">What does non-modal mean?</ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="space-y-2">
              <span className="block">
                The default behavior for the drawer is to restrict interactions to the dialog itself. This means that
                you can&apos;t interact with other content on the page.
              </span>
              <span className="block">
                But sometimes you want to allow those interactions. Setting{" "}
                <kbd className="rounded border border-primary/15 bg-secondary/50 px-0.5 py-[1.5px] font-geist-mono text-xs text-secondary-foreground">
                  modal
                </kbd>{" "}
                to{" "}
                <kbd className="rounded border border-primary/15 bg-secondary/50 px-0.5 py-[1.5px] font-geist-mono text-xs text-secondary-foreground">
                  false
                </kbd>{" "}
                will let you scroll the page, click on other elements, etc.
              </span>
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
