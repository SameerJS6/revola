import "@/app/globals.css";

import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { RootProvider } from "fumadocs-ui/provider";

import { PostHogProvider } from "@/components/analytics/posthog-provider";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Revola", template: `%s - Revola` },
  description:
    "Revola is a responsive dialog component for React. This responsive behavior improves usability without any extra work from you.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Components",
    "shadcn",
    "Revola",
    "Vaul",
    "Radix UI",
    "Responsive Dialog",
    "Dialog",
    "Modal",
    "Drawer",
  ],
  authors: [
    {
      name: "SameerJS6",
      url: "https://sameerjs.com",
    },
  ],
  creator: "SameerJS6",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL!,
    title: "Revola",
    description: "One component. Modal on desktop, Drawer on mobile.",
    siteName: "Revola",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og?title=Revola&description=One component. Modal on desktop, Drawer on mobile.`,
        width: 1200,
        height: 630,
        alt: "Revola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revola",
    description: "One component. Modal on desktop, Drawer on mobile.",
    images: [
      `${process.env.NEXT_PUBLIC_BASE_URL}/og?title=Revola&description=One component. Modal on desktop, Drawer on mobile.`,
    ],
    creator: "@sameerjs6",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
    { media: "(prefers-color-scheme: light)", color: "#fff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <PostHogProvider>
          <RootProvider search={{ enabled: false }}>
            <ThemeProvider enableSystem attribute="class" defaultTheme="dark" disableTransitionOnChange>
              <div data-vaul-drawer-wrapper="" className="bg-fd-background">
                {children}
              </div>
            </ThemeProvider>
          </RootProvider>
        </PostHogProvider>
      </body>
      <Analytics />
    </html>
  );
}
