"use client";

import { useId, useRef, useState } from "react";

import { CheckIcon, CopyIcon, UserRoundPlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function InviteMembersDialog() {
  const id = useId();
  const [emails, setEmails] = useState(["mark@yourcompany.com", "jane@yourcompany.com", ""]);
  const [copied, setCopied] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastInputRef = useRef<HTMLInputElement>(null);

  const addEmail = () => {
    setEmails([...emails, ""]);
  };

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Invite Members
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent
        className="sm:max-w-sm"
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          lastInputRef.current?.focus();
        }}
      >
        <div className="space-y-4 overflow-y-auto p-6 max-sm:pt-4">
          <div className="flex flex-col gap-2">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
              <UserRoundPlusIcon className="opacity-80" size={16} />
            </div>
            <ResponsiveDialogHeader className="p-0">
              <ResponsiveDialogTitle className="text-left">Invite team members</ResponsiveDialogTitle>
              <ResponsiveDialogDescription className="text-left">
                Invite teammates to earn free components.
              </ResponsiveDialogDescription>
            </ResponsiveDialogHeader>
          </div>
          <form className="space-y-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Invite via email</Label>
                <div className="space-y-3">
                  {emails.map((email, index) => (
                    <Input
                      key={index}
                      id={`team-email-${index + 1}`}
                      placeholder="hi@yourcompany.com"
                      type="email"
                      value={email}
                      onChange={(e) => handleEmailChange(index, e.target.value)}
                      ref={index === emails.length - 1 ? lastInputRef : undefined}
                    />
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={addEmail}
                className="text-sm underline underline-offset-2 hover:no-underline"
              >
                + Add another
              </button>
            </div>
            <Button type="button" className="w-full">
              Send invites
            </Button>
          </form>
          <hr className="my-1 border-t" />
          <div className="space-y-2">
            <Label htmlFor={id}>Invite via magic link</Label>
            <div className="relative">
              <Input
                id={id}
                readOnly
                type="text"
                ref={inputRef}
                className="pe-9"
                defaultValue="https://sameerjs.com/refer/69469"
              />
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleCopy}
                      className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed"
                      aria-label={copied ? "Copied" : "Copy to clipboard"}
                      disabled={copied}
                    >
                      <div className={cn("transition-all", copied ? "scale-100 opacity-100" : "scale-0 opacity-0")}>
                        <CheckIcon className="stroke-emerald-500" size={16} aria-hidden="true" />
                      </div>
                      <div
                        className={cn(
                          "absolute transition-all",
                          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
                        )}
                      >
                        <CopyIcon size={16} aria-hidden="true" />
                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="z-[9999] px-2 py-1 text-xs">Copy to clipboard</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
