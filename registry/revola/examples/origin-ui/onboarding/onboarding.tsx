"use client";

import { useState } from "react";
import Image from "next/image";

import { ArrowRightIcon } from "lucide-react";

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
import { cn } from "@/lib/utils";

export default function OnboardingDialog() {
  const [step, setStep] = useState(1);

  const stepContent = [
    {
      title: "Welcome to Revola",
      description:
        "A modern React component library built with Radix UI and Tailwind CSS, designed for building beautiful and accessible user interfaces.",
    },
    {
      title: "Built for Developers",
      description:
        "Revola provides a comprehensive set of pre-built components that are fully accessible, customizable, and ready for production use.",
    },
    {
      title: "Modern & Accessible",
      description:
        "Every component follows modern web standards with built-in accessibility features, keyboard navigation, and screen reader support.",
    },
    {
      title: "Start Building Today",
      description:
        "Jumpstart your next project with Revola's component library. Check out our documentation and examples to get started quickly.",
    },
  ];

  const totalSteps = stepContent.length;

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <ResponsiveDialog
      onOpenChange={(open) => {
        if (open) setStep(1);
      }}
    >
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Onboarding
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent
        closeButtonClassName="text-black bg-yellow-500/5"
        className="flex flex-col max-sm:max-h-[85%] sm:max-w-[400px]"
      >
        <div className="p-2">
          <Image
            width={382}
            height={216}
            alt="dialog"
            src="/extended-gradient.png"
            className="w-full rounded-md object-cover"
          />
        </div>
        <div className="space-y-6 p-6 pt-3">
          <ResponsiveDialogHeader>
            <ResponsiveDialogTitle>{stepContent[step - 1].title}</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>{stepContent[step - 1].description}</ResponsiveDialogDescription>
          </ResponsiveDialogHeader>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex justify-center space-x-1.5 max-sm:order-1">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={cn("size-1.5 rounded-full", index + 1 === step ? "bg-primary" : "bg-primary/20")}
                />
              ))}
            </div>
            <ResponsiveDialogFooter>
              <ResponsiveDialogClose asChild>
                <Button type="button" variant="ghost">
                  Skip
                </Button>
              </ResponsiveDialogClose>

              {step < totalSteps ? (
                <Button className="group" type="button" onClick={handleContinue}>
                  Next
                  <ArrowRightIcon
                    className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    aria-hidden="true"
                  />
                </Button>
              ) : (
                <ResponsiveDialogClose asChild>
                  <Button type="button">Okay</Button>
                </ResponsiveDialogClose>
              )}
            </ResponsiveDialogFooter>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
