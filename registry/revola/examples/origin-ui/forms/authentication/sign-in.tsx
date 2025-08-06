import { useId } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";

export default function SignInDialog() {
  const id = useId();
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Sign In
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="sm:max-w-sm">
        <div className="space-y-4 overflow-y-auto p-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
              <svg
                className="stroke-zinc-800 dark:stroke-zinc-100"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
              </svg>
            </div>
            <ResponsiveDialogHeader className="sm:text-center">
              <ResponsiveDialogTitle>Welcome back</ResponsiveDialogTitle>
              <ResponsiveDialogDescription>
                Enter your credentials to login to your account.
              </ResponsiveDialogDescription>
            </ResponsiveDialogHeader>
          </div>
          <form className="space-y-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`${id}-email`}>Email</Label>
                <Input
                  required
                  type="email"
                  id={`${id}-email`}
                  placeholder="hi@yourcompany.com"
                  className="[&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-password`}>Password</Label>
                <Input
                  required
                  type="password"
                  id={`${id}-password`}
                  placeholder="Enter your password"
                  className="[&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                />
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id={`${id}-remember`} />
                <Label htmlFor={`${id}-remember`} className="font-normal text-muted-foreground">
                  Remember me
                </Label>
              </div>
              <a className="text-sm underline hover:no-underline" href="#">
                Forgot password?
              </a>
            </div>
            <Button type="button" className="w-full">
              Sign in
            </Button>
          </form>
          <div className="flex items-center gap-3 before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
            <span className="text-xs text-muted-foreground">Or</span>
          </div>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
