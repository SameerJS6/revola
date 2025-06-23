import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";
import { Button } from "@/components/ui/button";
import React from "react";

export default function VaulScrollableDemo() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6">
          Vaul Scrollable Demo
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent hideCloseButton className="flex flex-col">
        <div className="overflow-y-auto p-6 max-md:mx-auto max-md:max-w-md">
          <ResponsiveDialogHeader className="p-0 text-left sm:px-0">
            <ResponsiveDialogTitle>Ira Glass on Taste</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>A scrollable example of responsive dialog</ResponsiveDialogDescription>
          </ResponsiveDialogHeader>

          <div className="mt-4 space-y-4">
            <p>
              Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative work, we
              get into it because we have good taste.
            </p>
            <p>
              But there is this gap. For the first couple years you make stuff, it's just not that good. It's trying to
              be good, it has potential, but it's not. But your taste, the thing that got you into the game, is still
              killer. And your taste is why your work disappoints you. A lot of people never get past this phase, they
              quit.{" "}
            </p>
            <p>
              Most people I know who do interesting, creative work went through years of this. We know our work doesn't
              have this special thing that we want it to have. We all go through this. And if you are just starting out
              or you are still in this phase, you gotta know its normal and the most important thing you can do is do a
              lot of work
            </p>
            <p>
              Put yourself on a deadline so that every week you will finish one story. It is only by going through a
              volume of work that you will close that gap, and your work will be as good as your ambitions. And I took
              longer to figure out how to do this than anyone I've ever met. It's gonna take awhile. It's normal to take
              awhile. You've just gotta fight your way through.
            </p>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
