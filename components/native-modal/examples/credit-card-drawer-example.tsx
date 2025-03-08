"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CreditCardIcon, WalletIcon } from "lucide-react";
import { useId } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images, { type CardImages } from "react-payment-inputs/images";

// const snapPoints = ["128px", "450px", 1];

export default function CreditCardDrawerExample() {
  const id = useId();
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } = usePaymentInputs();

  // const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);
  return (
    <Drawer
    // snapPoints={snapPoints}
    // activeSnapPoint={snap}
    // setActiveSnapPoint={setSnap}
    >
      <DrawerTrigger asChild>
        <Button variant="outline">Card details (Drawer)</Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[95%]">
        <div
          className={cn("mx-auto flex w-full flex-col", {
            // "overflow-y-auto": snap === 1,
            // "overflow-hidden": snap !== 1,
          })}
        >
          <div className="flex flex-col px-2">
            <div className="px-2">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
                <WalletIcon className="opacity-80" size={16} />
              </div>
            </div>
            <DrawerHeader>
              <DrawerTitle className="text-left">Update your card</DrawerTitle>
              <DrawerDescription className="text-left">Your new card will replace your current card.</DrawerDescription>
            </DrawerHeader>
          </div>
          <form className="space-y-5">
            <div className="space-y-5 px-6">
              <div className="space-y-4">
                <div className="*:not-first:mt-2 space-y-2">
                  <Label htmlFor={`name-${id}`}>Name on card</Label>
                  <Input id={`name-${id}`} type="text" required />
                </div>
                <div className="*:not-first:mt-2 space-y-2">
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
              <div className="flex items-center gap-2">
                <Checkbox id={`primary-${id}`} />
                <Label htmlFor={`primary-${id}`} className="font-normal text-muted-foreground">
                  Set as default payment method
                </Label>
              </div>
            </div>
            <DrawerFooter className="px-6">
              <Button type="button" className="w-full">
                Update card
              </Button>
              <DrawerClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

// https://www.xda-developers.com/powertoys-run-getting-new-plugin-that-saves-you-time/
