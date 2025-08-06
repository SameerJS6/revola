"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";
import { cn } from "@/lib/utils";

export default function VaulCustomFadeDemo() {
  const snapPoints = ["148px", "355px", 1];
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);

  return (
    <ResponsiveDialog
      fadeFromIndex={1}
      activeSnapPoint={snap}
      snapPoints={snapPoints}
      setActiveSnapPoint={setSnap}
      shouldScaleBackground={false}
    >
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Custom Fade Index Revola
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="flex max-h-[97%] flex-col overflow-hidden sm:max-h-[min(640px,80dvh)]">
        <div
          className={cn("mx-auto flex w-full flex-col p-6 pt-5 sm:overflow-y-auto", {
            "overflow-y-auto": snap === 1,
            "overflow-hidden": snap !== 1,
          })}
        >
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                className="h-5 w-5 flex-shrink-0 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ))}
          </div>
          <ResponsiveDialogHeader className="py-4 text-left sm:py-0">
            <ResponsiveDialogTitle className="mt-2 text-2xl font-medium">The Hidden Details</ResponsiveDialogTitle>
            <p className="mb-6 mt-1 text-sm">40 videos, 20+ exercises</p>
          </ResponsiveDialogHeader>

          <p className="text-muted-foreground">
            The world of user interface design is an intricate landscape filled with hidden details and nuance. In this
            course, you will learn something cool. To the untrained eye, a beautifully designed UI.
          </p>
          <Button className="mt-8">Buy for $199</Button>
          {/* <button className="h-[48px] flex-shrink-0 rounded-md bg-black font-medium text-gray-50">Buy for $199</button> */}
          <div className="mt-12">
            <h2 className="text-xl font-medium">Module 01. The Details</h2>
            <div className="mt-4 space-y-4">
              <div>
                <span className="block">Layers of UI</span>
                <span className="text-muted-foreground">A basic introduction to Layers of Design.</span>
              </div>
              <div>
                <span className="block">Typography</span>
                <span className="text-muted-foreground">The fundamentals of type.</span>
              </div>
              <div>
                <span className="block">UI Animations</span>
                <span className="text-muted-foreground">Going through the right easings and durations.</span>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <figure>
              <blockquote className="font-serif">
                "I especially loved the hidden details video. That was so useful, learned a lot by just reading it.
                Can&rsquo;t wait for more course content!"
              </blockquote>
              <figcaption>
                <span className="mt-2 block text-sm text-muted-foreground">Yvonne Ray, Frontend Developer</span>
              </figcaption>
            </figure>
          </div>
          <div className="mt-12">
            <h2 className="text-xl font-medium">Module 02. The Process</h2>
            <div className="mt-4 space-y-4">
              <div>
                <span className="block">Build</span>
                <span className="text-muted-foreground">Create cool components to practice.</span>
              </div>
              <div>
                <span className="block">User Insight</span>
                <span className="text-muted-foreground">Find out what users think and fine-tune.</span>
              </div>
              <div>
                <span className="block">Putting it all together</span>
                <span className="text-muted-foreground">Let&apos;s build an app together and apply everything.</span>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
