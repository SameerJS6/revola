"use client";

import { useId, useState } from "react";

import { CircleAlertIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

const PROJECT_NAME = "Revola";
export default function DeleteProjectDialog() {
  const id = useId();
  const [inputValue, setInputValue] = useState("");

  return (
    <ResponsiveDialog alert>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Delete Project
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="sm:max-w-[400px]">
        <div className="space-y-4 overflow-y-auto p-6 max-sm:pt-0">
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
              <CircleAlertIcon className="opacity-80" size={16} />
            </div>

            <ResponsiveDialogHeader className="pt-0">
              <ResponsiveDialogTitle className="sm:text-center">Final confirmation</ResponsiveDialogTitle>
              <ResponsiveDialogDescription className="sm:text-center">
                This action cannot be undone. To confirm, please enter the project name{" "}
                <span className="text-foreground">Revola</span>.
              </ResponsiveDialogDescription>
            </ResponsiveDialogHeader>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor={id}>Project name</Label>
              <Input
                id={id}
                type="text"
                value={inputValue}
                placeholder="Type Revola to confirm"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <ResponsiveDialogFooter className="p-0 sm:gap-2">
              <ResponsiveDialogClose asChild>
                <Button type="button" variant="outline" className="flex-1">
                  Cancel
                </Button>
              </ResponsiveDialogClose>
              <Button type="button" className="flex-1" disabled={inputValue !== PROJECT_NAME}>
                Delete
              </Button>
            </ResponsiveDialogFooter>
          </form>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
