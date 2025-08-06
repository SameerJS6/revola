import { CircleAlertIcon } from "lucide-react";

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

export default function AlertIconDialog() {
  return (
    <ResponsiveDialog alert onlyDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Alert with Icon
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="sm:max-w-[400px]">
        <div className="p-6">
          <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
              <CircleAlertIcon className="opacity-80" size={16} />
            </div>
            <ResponsiveDialogHeader className="pt-2 sm:pt-0">
              <ResponsiveDialogTitle>Are you sure?</ResponsiveDialogTitle>
              <ResponsiveDialogDescription>
                Are you sure you want to delete your account? All your data will be removed.
              </ResponsiveDialogDescription>
            </ResponsiveDialogHeader>
          </div>

          <ResponsiveDialogFooter className="mt-4 gap-2.5 sm:gap-2">
            <ResponsiveDialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </ResponsiveDialogClose>
            <ResponsiveDialogClose asChild>
              <Button>Confirm</Button>
            </ResponsiveDialogClose>
          </ResponsiveDialogFooter>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
