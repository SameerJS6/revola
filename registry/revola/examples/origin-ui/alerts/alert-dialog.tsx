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
} from "@/components/ui/revola";

export default function AlertDialog() {
  return (
    <ResponsiveDialog alert onlyDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Show Alert
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="sm:max-w-[400px]">
        <div className="p-6">
          <ResponsiveDialogHeader className="gap-2 p-0">
            <ResponsiveDialogTitle>Are you sure?</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              Take a moment to review the details provided to ensure you understand the implications.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>

          <ResponsiveDialogFooter className="mt-4 gap-2.5 p-0 pt-4">
            <ResponsiveDialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </ResponsiveDialogClose>

            <ResponsiveDialogClose asChild>
              <Button>Okay</Button>
            </ResponsiveDialogClose>
          </ResponsiveDialogFooter>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
