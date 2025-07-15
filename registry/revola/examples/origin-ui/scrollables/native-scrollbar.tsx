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

export default function NativeScrollDialog() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Native Scrollbar
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent
        showCloseButton={false}
        className="flex flex-col overflow-hidden sm:max-h-[min(640px,80dvh)] md:p-0"
      >
        <div className="overflow-y-auto">
          <ResponsiveDialogHeader className="contents space-y-0 text-left">
            <ResponsiveDialogTitle className="px-6 pt-6">Frequently Asked Questions (FAQ)</ResponsiveDialogTitle>
            <ResponsiveDialogDescription asChild>
              <div className="p-6">
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                  <div className="space-y-1">
                    <p>
                      <strong>Account Management</strong>
                    </p>
                    <p>
                      Navigate to the registration page, provide required information, and verify your email address.
                      You can sign up using your email or through social media platforms.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Password Reset Process</strong>
                    </p>
                    <p>
                      Users can reset their password through the account settings page. Click &quot;Forgot
                      Password&quot; and follow the email verification steps to regain account access quickly and
                      securely.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Service Pricing Tiers</strong>
                    </p>
                    <p>
                      We offer three primary subscription levels designed to meet diverse user needs: Basic (free with
                      limited features), Professional (monthly fee with comprehensive access), and Enterprise (custom
                      pricing with full platform capabilities).
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Technical Support Channels</strong>
                    </p>
                    <p>
                      Customer support is accessible through multiple communication methods including email support,
                      live chat during business hours, an integrated support ticket system, and phone support
                      specifically for enterprise-level customers.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Data Protection Strategies</strong>
                    </p>
                    <p>
                      Our platform implements rigorous security measures including 256-bit SSL encryption, regular
                      comprehensive security audits, strict data access controls, and compliance with international
                      privacy protection standards.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Platform Compatibility</strong>
                    </p>
                    <p>
                      The service supports multiple device and operating system environments, including web browsers
                      like Chrome and Firefox, mobile applications for iOS and Android, and desktop applications
                      compatible with Windows and macOS.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Subscription Management</strong>
                    </p>
                    <p>
                      Subscriptions can be cancelled at any time through account settings, with pro-rated refunds
                      available within 30 days of payment. Both monthly and annual billing options are provided, with
                      special discounts offered for annual commitments.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Payment Method Options</strong>
                    </p>
                    <p>
                      We accept a wide range of payment methods including major credit cards such as Visa, MasterCard,
                      and American Express, digital payment platforms like PayPal, and direct bank transfers. Regional
                      payment options may also be available depending on user location.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Customer Support</strong>
                    </p>
                    <p>
                      Our dedicated customer support team is available 24/7, providing quick and efficient assistance to
                      address any inquiries or issues you may have.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Privacy Policy</strong>
                    </p>
                    <p>
                      Our privacy policy outlines how we collect, use, and protect your personal data, ensuring your
                      privacy is protected at all times.
                    </p>
                  </div>
                </div>
              </div>
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>

          <ResponsiveDialogFooter className="md:justify-start md:px-6 md:pb-6">
            <ResponsiveDialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </ResponsiveDialogClose>
            <ResponsiveDialogClose asChild>
              <Button type="button">Okay</Button>
            </ResponsiveDialogClose>
          </ResponsiveDialogFooter>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
