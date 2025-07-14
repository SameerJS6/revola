"use client";

import { useId } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images, { type CardImages } from "react-payment-inputs/images";

import { CreditCardIcon, WalletIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";

export default function CreditCardDialog() {
  const id = useId();
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } = usePaymentInputs();

  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Update Card
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="sm:max-w-sm">
        <div className="space-y-4 overflow-y-auto p-6 max-sm:pt-4">
          <div className="flex flex-col gap-2">
            <div>
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
                <WalletIcon className="opacity-80" size={16} />
              </div>
            </div>
            <ResponsiveDialogHeader className="p-0">
              <ResponsiveDialogTitle className="text-left">Update your card</ResponsiveDialogTitle>
              <ResponsiveDialogDescription className="text-left">
                Your new card will replace your current card.
              </ResponsiveDialogDescription>
            </ResponsiveDialogHeader>
          </div>

          <form className="space-y-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor={`name-${id}`}>Name on card</Label>
                <Input
                  required
                  type="text"
                  id={`name-${id}`}
                  placeholder="John Doe"
                  className="[&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`number-${id}`}>Card Number</Label>
                <div className="relative">
                  <Input
                    {...getCardNumberProps()}
                    id={`number-${id}`}
                    className="peer pe-9 [direction:inherit] [&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                    placeholder="4242 4242 4242 4242"
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    {meta.cardType ? (
                      <svg
                        className="overflow-hidden rounded-sm"
                        {...getCardImageProps({ images: images as unknown as CardImages })}
                        width={20}
                      />
                    ) : (
                      <CreditCardIcon size={16} aria-hidden="true" />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor={`expiry-${id}`}>Expiry date</Label>
                  <Input
                    {...getExpiryDateProps()}
                    id={`expiry-${id}`}
                    className="[direction:inherit] [&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                    placeholder="06/28"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor={`cvc-${id}`}>CVC</Label>
                  <Input
                    {...getCVCProps()}
                    id={`cvc-${id}`}
                    className="[direction:inherit] [&:-webkit-autofill]:shadow-[0_0_0_30px_theme(colors.input)_inset]"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id={`primary-${id}`} />
              <Label htmlFor={`primary-${id}`} className="font-normal text-muted-foreground">
                Set as default payment method
              </Label>
            </div>
            <ResponsiveDialogFooter className="p-0">
              <Button type="button" className="w-full">
                Update card
              </Button>
            </ResponsiveDialogFooter>
          </form>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
