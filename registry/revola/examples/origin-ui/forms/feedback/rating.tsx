import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";
import { Textarea } from "@/components/ui/textarea";

export default function RatingDialog() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Rate Experience
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="mx-auto flex max-h-[85%] flex-col sm:max-w-[400px]">
        <div>
          <ResponsiveDialogHeader className="contents text-left">
            <ResponsiveDialogTitle className="border-b px-6 pb-4 text-base sm:pt-4">
              Help us improve
            </ResponsiveDialogTitle>
          </ResponsiveDialogHeader>
          <div className="px-6 py-4">
            <form className="space-y-5">
              <div className="space-y-4">
                <div>
                  <fieldset className="space-y-4">
                    <legend className="text-lg font-semibold leading-none text-foreground">
                      How hard was it to set up your account?
                    </legend>
                    <RadioGroup className="shadow-xs flex gap-0 -space-x-px rounded-md max-sm:flex-wrap">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                        <label
                          key={number}
                          className="relative flex size-9 flex-1 cursor-pointer flex-col items-center justify-center gap-3 border border-input text-center text-sm outline-offset-2 transition-colors first:rounded-s-lg last:rounded-e-lg has-[[data-state=checked]]:z-10 has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent-foreground/5 has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
                        >
                          <RadioGroupItem
                            id={`radio-17-r${number}`}
                            value={number.toString()}
                            className="sr-only after:absolute after:inset-0"
                          />
                          {number}
                        </label>
                      ))}
                    </RadioGroup>
                  </fieldset>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <p>Very easy</p>
                    <p>Very difficult</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Why did you give this rating?</Label>
                  <Textarea
                    id="feedback"
                    rows={3}
                    className="resize-none"
                    placeholder="How can we improve Revola?"
                    aria-label="Send feedback"
                  />
                </div>
              </div>
              <Button type="button" className="w-full">
                Send feedback
              </Button>
            </form>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
