"use client";

import { useRef, useState } from "react";

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

export default function TermsAndConditionsDialog() {
  const [hasReadToBottom, setHasReadToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;

    const scrollPercentage = content.scrollTop / (content.scrollHeight - content.clientHeight);
    if (scrollPercentage >= 0.99 && !hasReadToBottom) {
      setHasReadToBottom(true);
    }
  };

  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Terms & Conditions
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent className="flex flex-col sm:max-h-[min(640px,80dvh)] sm:gap-0">
        <ResponsiveDialogHeader className="contents space-y-0 text-left">
          <ResponsiveDialogTitle className="border-b px-6 pb-4 text-base sm:py-4">
            Terms & Conditions
          </ResponsiveDialogTitle>
          <div ref={contentRef} onScroll={handleScroll} className="overflow-y-auto">
            <ResponsiveDialogDescription asChild>
              <div className="px-6 py-4">
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p>
                        <strong>Acceptance of Terms</strong>
                      </p>
                      <p>
                        By accessing and using this website, users agree to comply with and be bound by these Terms of
                        Service. Users who do not agree with these terms should discontinue use of the website
                        immediately.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>User Account Responsibilities</strong>
                      </p>
                      <p>
                        Users are responsible for maintaining the confidentiality of their account credentials. Any
                        activities occurring under a user&lsquo;s account are the sole responsibility of the account
                        holder. Users must notify the website administrators immediately of any unauthorized account
                        access.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Content Usage and Restrictions</strong>
                      </p>
                      <p>
                        The website and its original content are protected by intellectual property laws. Users may not
                        reproduce, distribute, modify, create derivative works, or commercially exploit any content
                        without explicit written permission from the website owners.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Limitation of Liability</strong>
                      </p>
                      <p>
                        The website provides content &ldquo;as is&rdquo; without any warranties. The website owners
                        shall not be liable for direct, indirect, incidental, consequential, or punitive damages arising
                        from user interactions with the platform.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>User Conduct Guidelines</strong>
                      </p>
                      <ul className="list-disc pl-6">
                        <li>Not upload harmful or malicious content</li>
                        <li>Respect the rights of other users</li>
                        <li>Avoid activities that could disrupt website functionality</li>
                        <li>Comply with applicable local and international laws</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Modifications to Terms</strong>
                      </p>
                      <p>
                        The website reserves the right to modify these terms at any time. Continued use of the website
                        after changes constitutes acceptance of the new terms.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Termination Clause</strong>
                      </p>
                      <p>
                        The website may terminate or suspend user access without prior notice for violations of these
                        terms or for any other reason deemed appropriate by the administration.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <strong>Governing Law</strong>
                      </p>
                      <p>
                        These terms are governed by the laws of the jurisdiction where the website is primarily
                        operated, without regard to conflict of law principles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ResponsiveDialogDescription>
          </div>
        </ResponsiveDialogHeader>
        <ResponsiveDialogFooter className="border-t sm:items-center sm:px-6 sm:py-4">
          {!hasReadToBottom && (
            <span className="grow text-xs text-muted-foreground max-sm:text-center">
              Read all terms before accepting.
            </span>
          )}
          <div className="flex flex-col gap-4 sm:flex-row-reverse">
            <ResponsiveDialogClose asChild>
              <Button type="button" disabled={!hasReadToBottom}>
                I agree
              </Button>
            </ResponsiveDialogClose>
            <ResponsiveDialogClose asChild className="sm:flex-row-reverse sm:justify-start">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </ResponsiveDialogClose>
          </div>
        </ResponsiveDialogFooter>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
