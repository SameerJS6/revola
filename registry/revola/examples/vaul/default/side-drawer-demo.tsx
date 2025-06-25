import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";

export default function VaulSideDrawerDemo() {
  return (
    <ResponsiveDialog shouldScaleBackground={false} direction="right">
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Vaul Side Drawer Demo
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent hideCloseButton>
        <div className="flex size-full grow flex-col rounded-2xl bg-fd-background p-6">
          <ResponsiveDialogHeader className="space-y-2 text-left">
            <ResponsiveDialogTitle>It supports all directions.</ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="text-base">
              This one specifically is not touching the edge of the screen, but that&apos;s not required for a side
              drawer.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
