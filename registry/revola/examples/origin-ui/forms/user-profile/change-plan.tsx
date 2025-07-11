import { useId } from "react";

import { CheckIcon, RefreshCcwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResponsiveDialog,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";

export default function ChangePlanDialog() {
  const id = useId();
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Change plan
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="overflow-hidden sm:max-w-[400px]">
        <div className="space-y-4 overflow-y-auto p-6 max-sm:pt-4">
          <div className="mb-2 flex flex-col gap-2">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
              <RefreshCcwIcon className="opacity-80" size={16} />
            </div>
            <ResponsiveDialogHeader className="p-0">
              <ResponsiveDialogTitle className="text-left">Change your plan</ResponsiveDialogTitle>
              <ResponsiveDialogDescription className="text-left">
                Pick one of the following plans.
              </ResponsiveDialogDescription>
            </ResponsiveDialogHeader>
          </div>
          <form className="space-y-5">
            <RadioGroup className="gap-2" defaultValue="2">
              {/* Radio card #1 */}
              <div className="shadow-xs relative flex w-full items-center gap-2 rounded-md border border-input px-4 py-3 outline-none has-[[data-state=checked]]:border-primary/50 has-[[data-state=checked]]:bg-accent">
                <RadioGroupItem
                  value="1"
                  id={`${id}-1`}
                  aria-describedby={`${id}-1-description`}
                  className="order-1 after:absolute after:inset-0"
                />
                <div className="grid grow gap-1">
                  <Label htmlFor={`${id}-1`}>Essential</Label>
                  <p id={`${id}-1-description`} className="text-xs text-muted-foreground">
                    $4 per member/month
                  </p>
                </div>
              </div>
              {/* Radio card #2 */}
              <div className="shadow-xs relative flex w-full items-center gap-2 rounded-md border border-input px-4 py-3 outline-none has-[[data-state=checked]]:border-primary/50 has-[[data-state=checked]]:bg-accent">
                <RadioGroupItem
                  value="2"
                  id={`${id}-2`}
                  aria-describedby={`${id}-2-description`}
                  className="order-1 after:absolute after:inset-0"
                />
                <div className="grid grow gap-1">
                  <Label htmlFor={`${id}-2`}>Standard</Label>
                  <p id={`${id}-2-description`} className="text-xs text-muted-foreground">
                    $19 per member/month
                  </p>
                </div>
              </div>
              {/* Radio card #3 */}
              <div className="shadow-xs relative flex w-full items-center gap-2 rounded-md border border-input px-4 py-3 outline-none has-[[data-state=checked]]:border-primary/50 has-[[data-state=checked]]:bg-accent">
                <RadioGroupItem
                  value="3"
                  id={`${id}-3`}
                  aria-describedby={`${id}-3-description`}
                  className="order-1 after:absolute after:inset-0"
                />
                <div className="grid grow gap-1">
                  <Label htmlFor={`${id}-3`}>Enterprise</Label>
                  <p id={`${id}-3-description`} className="text-xs text-muted-foreground">
                    $32 per member/month
                  </p>
                </div>
              </div>
            </RadioGroup>
            <div className="space-y-3">
              <p>
                <strong className="text-sm font-medium">Features include:</strong>
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckIcon size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  Create unlimited projects.
                </li>
                <li className="flex gap-2">
                  <CheckIcon size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  Remove watermarks.
                </li>
                <li className="flex gap-2">
                  <CheckIcon size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  Add unlimited users and free viewers.
                </li>
                <li className="flex gap-2">
                  <CheckIcon size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  Upload unlimited files.
                </li>
                <li className="flex gap-2">
                  <CheckIcon size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  7-day money back guarantee.
                </li>
                <li className="flex gap-2">
                  <CheckIcon size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                  Advanced permissions.
                </li>
              </ul>
            </div>
            <div className="grid gap-2">
              <Button type="button" className="w-full">
                Change plan
              </Button>
              <ResponsiveDialogClose asChild>
                <Button type="button" variant="ghost" className="w-full">
                  Cancel
                </Button>
              </ResponsiveDialogClose>
            </div>
          </form>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
