"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images, { type CardImages } from "react-payment-inputs/images";

import { CreditCardIcon, StoreIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";

export default function CheckoutDialog() {
  const id = useId();
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps, getCardImageProps } = usePaymentInputs();
  const couponInputRef = useRef<HTMLInputElement>(null);
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  // Auto-focus the coupon input when it's shown
  useEffect(() => {
    if (showCouponInput && couponInputRef.current) {
      couponInputRef.current.focus();
    }
  }, [showCouponInput]);

  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Checkout
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="sm:max-w-[400px]">
        <div className="space-y-4 overflow-y-auto p-6 max-sm:pt-4">
          <div className="mb-2 flex flex-col gap-2">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border" aria-hidden="true">
              <StoreIcon className="opacity-80" size={16} />
            </div>
            <ResponsiveDialogHeader className="text-left">
              <ResponsiveDialogTitle>Confirm and pay</ResponsiveDialogTitle>
              <ResponsiveDialogDescription>Pay securely and cancel any time.</ResponsiveDialogDescription>
            </ResponsiveDialogHeader>
          </div>

          <form className="space-y-5">
            <div className="space-y-4">
              <RadioGroup className="grid-cols-2" defaultValue="yearly">
                {/* Monthly */}
                <label className="shadow-xs relative flex cursor-pointer flex-col gap-1 rounded-md border border-input px-4 py-3 outline-none transition-[color,box-shadow] has-[:focus-visible]:border-ring has-[[data-state=checked]]:border-primary/50 has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50">
                  <RadioGroupItem id="radio-monthly" value="monthly" className="sr-only after:absolute after:inset-0" />
                  <p className="text-sm font-medium text-foreground">Monthly</p>
                  <p className="text-sm text-muted-foreground">$32/month</p>
                </label>
                {/* Yearly */}
                <label className="shadow-xs relative flex cursor-pointer flex-col gap-1 rounded-md border border-input px-4 py-3 outline-none transition-[color,box-shadow] has-[:focus-visible]:border-ring has-[[data-state=checked]]:border-primary/50 has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50">
                  <RadioGroupItem id="radio-yearly" value="yearly" className="sr-only after:absolute after:inset-0" />
                  <div className="inline-flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-foreground">Yearly</p>
                    <Badge>Popular</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">$320/year</p>
                </label>
              </RadioGroup>
              <div className="space-y-2">
                <Label htmlFor={`name-${id}`}>Name on card</Label>
                <Input id={`name-${id}`} type="text" required placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <legend className="text-sm font-medium text-foreground">Card Details</legend>
                <div className="shadow-xs rounded-md">
                  <div className="relative focus-within:z-10">
                    <Input
                      className="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
                      {...getCardNumberProps()}
                      placeholder="4242 4242 4242 4242"
                    />
                    <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                      {meta.cardType ? (
                        <svg
                          className="overflow-hidden rounded-sm"
                          // Todo: remove this type case at build time in rehype-component.ts
                          {...getCardImageProps({
                            images: images as unknown as CardImages,
                          })}
                          width={20}
                        />
                      ) : (
                        <CreditCardIcon size={16} aria-hidden="true" />
                      )}
                    </div>
                  </div>
                  <div className="-mt-px flex">
                    <div className="min-w-0 flex-1 focus-within:z-10">
                      <Input
                        className="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
                        {...getExpiryDateProps()}
                        placeholder="06/28"
                      />
                    </div>
                    <div className="-ms-px min-w-0 flex-1 focus-within:z-10">
                      <Input
                        className="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
                        {...getCVCProps()}
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {!showCouponInput ? (
                <button
                  type="button"
                  onClick={() => setShowCouponInput(true)}
                  className="text-sm underline hover:no-underline"
                >
                  + Add coupon
                </button>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor={`coupon-${id}`}>Coupon code</Label>
                  <Input
                    id={`coupon-${id}`}
                    ref={couponInputRef}
                    placeholder="MONSOON25"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                </div>
              )}
            </div>
            <Button type="button" className="w-full">
              Subscribe
            </Button>
          </form>
          <p className="text-center text-xs text-muted-foreground">Payments are non-refundable. Cancel anytime.</p>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
