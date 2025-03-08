"use client";
import {
  NativeModal,
  NativeModalClose,
  NativeModalContent,
  NativeModalDescription,
  NativeModalFooter,
  NativeModalHeader,
  NativeModalTitle,
  NativeModalTrigger,
} from "@/components/native-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCardIcon, WalletIcon } from "lucide-react";
import React, { useId } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images, { type CardImages } from "react-payment-inputs/images";

export default function CreditCardNativeModalExample() {
  const id = useId();
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } = usePaymentInputs();

  return (
    <NativeModal>
      <NativeModalTrigger asChild>
        <Button variant="outline">Card details (Native Modal)</Button>
      </NativeModalTrigger>
      <NativeModalContent className="sm:max-w-md sm:rounded-3xl">
        <div className="flex flex-col gap-2 max-sm:px-2">
          <div className="max-sm:px-2">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
              <WalletIcon className="opacity-80" size={16} />
            </div>
          </div>
          <NativeModalHeader>
            <NativeModalTitle className="text-left">Update your card</NativeModalTitle>
            <NativeModalDescription className="text-left">
              Your new card will replace your current card.
            </NativeModalDescription>
          </NativeModalHeader>
        </div>

        <form className="space-y-5">
          <div className="space-y-4 max-sm:px-6">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`name-${id}`}>Name on card</Label>
              <Input id={`name-${id}`} type="text" required />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`number-${id}`}>Card Number</Label>
              <div className="relative">
                <Input {...getCardNumberProps()} id={`number-${id}`} className="peer pe-9 [direction:inherit]" />
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
                <Input className="[direction:inherit]" {...getExpiryDateProps()} id={`expiry-${id}`} />
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor={`cvc-${id}`}>CVC</Label>
                <Input className="[direction:inherit]" {...getCVCProps()} id={`cvc-${id}`} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 max-sm:px-6">
            <Checkbox id={`primary-${id}`} />
            <Label htmlFor={`primary-${id}`} className="font-normal text-muted-foreground">
              Set as default payment method
            </Label>
          </div>
          <NativeModalFooter className="max-sm:px-6 sm:flex-row-reverse sm:justify-start">
            <Button type="button">Update card</Button>
            <NativeModalClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </NativeModalClose>
          </NativeModalFooter>
        </form>
      </NativeModalContent>
    </NativeModal>
  );
}
