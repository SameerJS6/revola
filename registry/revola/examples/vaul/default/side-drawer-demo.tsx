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
          Side Drawer Revola
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent showCloseButton={false}>
        <div className="flex size-full grow flex-col rounded-2xl bg-fd-background p-6">
          <ResponsiveDialogHeader className="space-y-2 text-left">
            <ResponsiveDialogTitle>Directional Drawer Control</ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="text-base">
              Revola supports all drawer directions - top, bottom, left, and right. This example shows a right-side
              drawer that can be positioned anywhere on mobile, while automatically becoming a centered modal on
              desktop.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
