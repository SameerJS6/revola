import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/registry/revola";

export default function VaulDefaultDemo() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline" className="h-12 rounded-full px-6 capitalize">
          Default Revola
        </Button>
      </ResponsiveDialogTrigger>

      <ResponsiveDialogContent>
        <div className="mx-auto mb-2 max-w-md px-6 py-4 sm:p-0 sm:pt-6">
          <ResponsiveDialogHeader className="gap-4 text-left sm:gap-4">
            <ResponsiveDialogTitle className="text-base font-medium leading-6 tracking-normal">
              Revola - Responsive Dialog
            </ResponsiveDialogTitle>
            <ResponsiveDialogDescription className="max-md:text-base">
              Automatically adapts to screen size - renders as a drawer on mobile and a modal on desktop.
              <span className="mt-2 block">
                This is the simplest setup: just add ResponsiveDialog and it handles the rest.
              </span>
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>

        <ResponsiveDialogFooter className="border-t border-border bg-fd-secondary/25 px-6 py-4 dark:bg-secondary/50">
          <div className="mx-auto flex w-full max-w-md justify-end gap-6">
            <a
              className="gap-0.25 flex items-center text-xs text-secondary-foreground"
              href="https://github.com/SameerJS6/revola"
              target="_blank"
            >
              GitHub
              <svg
                fill="none"
                height="16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="16"
                aria-hidden="true"
                className="ml-1 h-3 w-3"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </a>
            <a
              className="gap-0.25 flex items-center text-xs text-secondary-foreground"
              href="https://twitter.com/SameerJS6"
              target="_blank"
            >
              Twitter
              <svg
                fill="none"
                height="16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="16"
                aria-hidden="true"
                className="ml-1 h-3 w-3"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                <path d="M15 3h6v6"></path>
                <path d="M10 14L21 3"></path>
              </svg>
            </a>
          </div>
        </ResponsiveDialogFooter>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
