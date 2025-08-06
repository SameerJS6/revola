import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";

export default function VaulScrollableDemo() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Scrollable Revola
        </Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent
        showCloseButton={false}
        className="flex max-h-[90%] flex-col overflow-hidden sm:max-h-[min(640px,80dvh)]"
      >
        <div className="overflow-y-auto p-6">
          <ResponsiveDialogHeader className="text-left">
            <ResponsiveDialogTitle>Scrollable Content in Revola</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              Demonstrating how Revola handles long content with smooth scrolling behavior on both mobile and desktop.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>

          <div className="mt-4 space-y-4">
            <p>
              Revola automatically handles scrollable content, providing a seamless experience across all devices. On
              mobile, it renders as a smooth drawer, while on desktop it becomes a scrollable modal.
            </p>
            <p>
              <strong>Mobile Experience:</strong> The drawer slides up from the bottom, with content that can be
              scrolled naturally. Users can still interact with the familiar swipe-to-close gesture when they're done
              reading.
            </p>
            <p>
              <strong>Desktop Experience:</strong> The modal appears centered on screen with a scrollable content area.
              The familiar dialog patterns work as expected, with proper focus management and keyboard navigation.
            </p>
            <p>
              <strong>Developer Benefits:</strong> You write your content once, and Revola handles the responsive
              behavior automatically. No need to write separate components for mobile and desktop - just use
              ResponsiveDialog and focus on your content.
            </p>
            <p>
              This example shows how Revola adapts to long content while maintaining optimal user experience patterns
              for each device type. The same component code works perfectly on mobile phones, tablets, and desktop
              computers.
            </p>
          </div>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
