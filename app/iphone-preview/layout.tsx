import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Preview",
  description: "Mobile preview for responsive dialog components",
  robots: "noindex", // Prevent indexing of preview pages
};

export default function MobilePreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="h-full bg-fd-background antialiased">
        <div data-vaul-drawer-wrapper="" className="!bg-fd-background">
          {children}
        </div>
      </body>
    </html>
  );
}
