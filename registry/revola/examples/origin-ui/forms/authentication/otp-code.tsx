"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { OTPInput, type SlotProps } from "input-otp";

import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";
import { cn } from "@/lib/utils";

const CORRECT_CODE = "6996";

export default function OtpCodeDialog() {
  const [value, setValue] = useState("");
  const [hasGuessed, setHasGuessed] = useState<undefined | boolean>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (hasGuessed) {
      closeButtonRef.current?.focus();
    }
  }, [hasGuessed]);

  async function onSubmit(e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault?.();

    inputRef.current?.select();
    await new Promise((r) => setTimeout(r, 1_00));

    setHasGuessed(value === CORRECT_CODE);

    setValue("");
    setTimeout(() => {
      inputRef.current?.blur();
    }, 20);
  }

  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Verify OTP
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="mx-auto sm:max-w-[400px]">
        <div className="space-y-4 p-4 pb-6 sm:p-6">
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
              <ResponsiveDialogTitle>{hasGuessed ? "Code verified!" : "Enter confirmation code"}</ResponsiveDialogTitle>
              <ResponsiveDialogDescription className="text-balance">
                {hasGuessed
                  ? "Your code has been successfully verified."
                  : `Check your email and enter the code - Try ${CORRECT_CODE}`}
              </ResponsiveDialogDescription>
            </ResponsiveDialogHeader>
          </div>

          {hasGuessed ? (
            <div className="text-center">
              <ResponsiveDialogClose asChild>
                <Button type="button" ref={closeButtonRef}>
                  Close
                </Button>
              </ResponsiveDialogClose>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <OTPInput
                  inputMode="numeric"
                  id="confirmation-code"
                  ref={inputRef}
                  value={value}
                  onChange={setValue}
                  containerClassName="flex items-center gap-3 has-disabled:opacity-50"
                  maxLength={4}
                  onFocus={() => setHasGuessed(undefined)}
                  render={({ slots }) => (
                    <div className="flex gap-2">
                      {slots.map((slot, idx) => (
                        <Slot key={idx} {...slot} />
                      ))}
                    </div>
                  )}
                  onComplete={onSubmit}
                />
              </div>
              {hasGuessed === false && (
                <p className="text-center text-xs text-muted-foreground" role="alert" aria-live="polite">
                  Invalid code. Please try again.
                </p>
              )}
              <p className="text-center text-sm">
                <a className="underline hover:no-underline" href="#">
                  Resend code
                </a>
              </p>
            </div>
          )}
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "shadow-xs flex size-9 items-center justify-center rounded-md border border-input bg-background font-medium text-foreground transition-[color,box-shadow]",
        { "z-10 border-ring ring-[3px] ring-ring/50": props.isActive }
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
    </div>
  );
}
