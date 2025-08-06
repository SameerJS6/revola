"use client";

import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";

export default function VaulInputDefaultDemo() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Input Default Revola
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="flex max-h-[97dvh] flex-col">
        <form className="overflow-auto rounded-t-[10px] px-6 py-4 sm:py-6">
          <ResponsiveDialogHeader className="mb-6 text-left">
            <ResponsiveDialogTitle className="font-medium">New Project</ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="leading-6">
              Get started by filling in the information below to create your new project.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Project name
              </label>
              <input
                id="name"
                className="h-9 w-full rounded-lg border border-border bg-fd-background px-3 outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Description
              </label>
              <textarea
                rows={6}
                className="w-full resize-none rounded-lg border border-border bg-fd-background p-3 pt-2.5 outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <ResponsiveDialogFooter className="pt-6 sm:pt-4">
            <Button className="font-medium">Submit</Button>
          </ResponsiveDialogFooter>
        </form>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
