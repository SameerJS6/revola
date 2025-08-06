"use client";

import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";
import { Textarea } from "@/components/ui/textarea";

export default function FeedbackDialog() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Send Feedback
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="sm:max-w-sm">
        <div className="space-y-4 overflow-y-auto p-6 pt-2 sm:p-6">
          <ResponsiveDialogHeader>
            <ResponsiveDialogTitle>Send us feedback</ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="text-balance">
              Watch{" "}
              <a className="text-foreground underline-offset-2 hover:underline" href="#">
                tutorials
              </a>
              , read Revola&lsquo;s{" "}
              <a className="text-foreground underline-offset-2 hover:underline" href="#">
                documentation
              </a>
              , or join our{" "}
              <a className="text-foreground underline-offset-2 hover:underline" href="#">
                Discord
              </a>{" "}
              for community help.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Textarea
              rows={3}
              id="feedback"
              className="resize-none"
              placeholder="How can we improve Revola?"
              aria-label="Send feedback"
            />
            <div className="flex flex-col sm:flex-row sm:justify-end">
              <Button type="button">Send feedback</Button>
            </div>
          </form>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
