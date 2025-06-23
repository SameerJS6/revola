import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";
import { Button } from "@/components/ui/button";

export default function VaulSideDrawerDemo() {
  return (
    <ResponsiveDialog shouldScaleBackground={false} direction="right">
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Vaul Side Drawer Demo
        </Button>
      </ResponsiveDialogTrigger>
      {/* When using direction props, never use Modal's content directly, always use a wrapper element and then have all the modal's content or else, it will cause a weird background attached to entire drawer  */}
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
