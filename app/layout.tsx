import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";

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
        <RootProvider search={{ enabled: false }}>
          <ThemeProvider enableSystem attribute="class" defaultTheme="dark" disableTransitionOnChange>
            <div data-vaul-drawer-wrapper="" className="bg-fd-background">
              {children}
            </div>
          </ThemeProvider>
        </RootProvider>
      </body>
    </html>
  );
}
