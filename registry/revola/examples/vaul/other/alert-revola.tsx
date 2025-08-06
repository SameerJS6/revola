import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";

export default function AlertRevolaDemo() {
  return (
    <ResponsiveDialog alert onlyDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6">
          Alert Revola
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent>
        <div className="p-6">
          <ResponsiveDialogHeader className="gap-2">
            <ResponsiveDialogTitle>Are you absolutely sure?</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>

          <ResponsiveDialogFooter className="mt-4 gap-2.5 sm:gap-2">
            <ResponsiveDialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </ResponsiveDialogClose>
            <ResponsiveDialogClose asChild>
              <Button>Continue</Button>
            </ResponsiveDialogClose>
          </ResponsiveDialogFooter>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
