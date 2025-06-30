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
          Non-Modal Revola
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent>
        <div className="flex flex-col p-6">
          <ResponsiveDialogHeader className="space-y-4 p-0 text-left">
            <ResponsiveDialogTitle className="font-medium">Non-Modal Revola</ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="space-y-2">
              <span className="block">
                By default, Revola blocks interaction with background content when open, just like traditional modals.
              </span>
              <span className="block">
                Setting{" "}
                <kbd className="rounded border border-primary/15 bg-secondary/50 px-0.5 py-[1.5px] font-geist-mono text-xs text-secondary-foreground">
                  modal={"{false}"}
                </kbd>{" "}
                allows users to interact with the page behind Revola - scroll, click buttons, navigate, etc.
              </span>
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
