import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";

export default function VaulOtherDemo() {
  return (
    <ResponsiveDialog modal={false}>
      <ResponsiveDialogTrigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:text-white dark:hover:bg-[#1A1A19]">
        Vaul Non-Modal Demo
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent>
        <div className="flex flex-col border-t border-border p-6 sm:border">
          <ResponsiveDialogHeader className="space-y-4 p-0 text-left">
            <ResponsiveDialogTitle className="font-medium">What does non-modal mean?</ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="space-y-2 text-base">
              <span className="block">
                The default behavior for the drawer is to restrict interactions to the dialog itself. This means that
                you can&apos;t interact with other content on the page.
              </span>
              <span className="block">
                But sometimes you want to allow those interactions. Setting `modal` to `false` will let you scroll the
                page, click on other elements, etc.
              </span>
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
