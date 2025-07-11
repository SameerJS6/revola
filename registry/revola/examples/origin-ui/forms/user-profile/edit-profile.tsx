"use client";

import { useId } from "react";

import { CheckIcon, ImagePlusIcon, XIcon } from "lucide-react";

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
import { Textarea } from "@/components/ui/textarea";

import { useCharacterLimit } from "@/hooks/use-character-limit";
import { useFileUpload } from "@/hooks/use-file-upload";

// Pretend we have initial image files
const initialBgImage = [
  {
    name: "profile-bg.png",
    size: 1528737,
    type: "image/png",
    url: "/vercel-geist-modal.png",
    id: "profile-bg-123456789",
  },
];

const initialAvatarImage = [
  {
    name: "avatar-72-01.png",
    size: 1528737,
    type: "image/png",
    url: "/image.png",
    id: "avatar-123456789",
  },
];

export default function EditProfileDialog() {
  const id = useId();

  const maxLength = 180;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({
    maxLength,
    initialValue: "Hey, I am Charlet, a Product Manager who loves building amazing products that delight users!",
  });

  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Edit profile
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="flex flex-col gap-0">
        <ResponsiveDialogHeader className="space-y-0 !p-0 text-left">
          <ResponsiveDialogTitle className="border-b px-6 py-4 text-base max-sm:pt-2">
            Edit profile
          </ResponsiveDialogTitle>
        </ResponsiveDialogHeader>
        <ResponsiveDialogDescription className="sr-only">
          Make changes to your profile here. You can change your photo and set a username.
        </ResponsiveDialogDescription>

        <div className="overflow-y-auto">
          <ProfileBg />
          <Avatar />
          <div className="px-6 pb-6 pt-4">
            <form className="space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1 space-y-2">
                  <Label htmlFor={`${id}-first-name`}>First name</Label>
                  <Input
                    id={`${id}-first-name`}
                    placeholder="Matt"
                    defaultValue="Charlet"
                    type="text"
                    required
                    className="[&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor={`${id}-last-name`}>Last name</Label>
                  <Input
                    id={`${id}-last-name`}
                    placeholder="Welsh"
                    defaultValue="Anderson"
                    type="text"
                    required
                    className="[&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-username`}>Username</Label>
                <div className="relative">
                  <Input
                    id={`${id}-username`}
                    className="peer pe-9 [&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                    placeholder="Username"
                    defaultValue="charlet-pm-69"
                    type="text"
                    required
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <CheckIcon size={16} className="text-emerald-500" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-website`}>Website</Label>
                <div className="shadow-xs flex rounded-md">
                  <span className="-z-10 inline-flex items-center rounded-s-md border border-input bg-background px-3 text-sm text-muted-foreground">
                    https://
                  </span>
                  <Input
                    type="text"
                    id={`${id}-website`}
                    placeholder="yourwebsite.com"
                    defaultValue="www.charletanderson.com"
                    className="-ms-px rounded-s-none shadow-none [&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-bio`}>Biography</Label>
                <Textarea
                  id={`${id}-bio`}
                  defaultValue={value}
                  maxLength={maxLength}
                  onChange={handleChange}
                  placeholder="Write a few sentences about yourself"
                  className="[&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                  aria-describedby={`${id}-description`}
                />
                <p
                  id={`${id}-description`}
                  className="mt-2 text-right text-xs text-muted-foreground"
                  role="status"
                  aria-live="polite"
                >
                  <span className="tabular-nums">{limit - characterCount}</span> characters left
                </p>
              </div>
            </form>
          </div>
        </div>
        <ResponsiveDialogFooter className="flex-col-reverse border-t sm:px-6 sm:py-4">
          <ResponsiveDialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </ResponsiveDialogClose>
          <ResponsiveDialogClose asChild>
            <Button type="button">Save changes</Button>
          </ResponsiveDialogClose>
        </ResponsiveDialogFooter>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}

function ProfileBg() {
  const [{ files }, { removeFile, openFileDialog, getInputProps }] = useFileUpload({
    accept: "image/*",
    initialFiles: initialBgImage,
  });

  const currentImage = files[0]?.preview || null;

  return (
    <div className="h-32">
      <div className="relative flex size-full items-center justify-center overflow-hidden bg-muted">
        {currentImage && (
          <img
            className="size-full object-cover"
            src={currentImage}
            alt={files[0]?.preview ? "Preview of uploaded image" : "Default profile background"}
            width={512}
            height={96}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <button
            type="button"
            className="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-none transition-[color,box-shadow] hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            onClick={openFileDialog}
            aria-label={currentImage ? "Change image" : "Upload image"}
          >
            <ImagePlusIcon size={16} aria-hidden="true" />
          </button>
          {currentImage && (
            <button
              type="button"
              className="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-none transition-[color,box-shadow] hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              onClick={() => removeFile(files[0]?.id)}
              aria-label="Remove image"
            >
              <XIcon size={16} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
      <input {...getInputProps()} className="sr-only" aria-label="Upload image file" />
    </div>
  );
}

function Avatar() {
  const [{ files }, { openFileDialog, getInputProps }] = useFileUpload({
    accept: "image/*",
    initialFiles: initialAvatarImage,
  });

  const currentImage = files[0]?.preview || null;

  return (
    <div className="-mt-10 px-6">
      <div className="shadow-xs relative flex size-20 items-center justify-center overflow-hidden rounded-full border-4 border-background bg-muted shadow-black/10">
        {currentImage && (
          <img src={currentImage} className="size-full object-cover" width={80} height={80} alt="Profile image" />
        )}
        <button
          type="button"
          className="absolute flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-none transition-[color,box-shadow] hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          onClick={openFileDialog}
          aria-label="Change profile picture"
        >
          <ImagePlusIcon size={16} aria-hidden="true" />
        </button>
        <input {...getInputProps()} className="sr-only" aria-label="Upload profile picture" />
      </div>
    </div>
  );
}
