import type { Metadata } from "next";

import RevolaHero from "@/components/hero";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Revola",
  description: "One component. Modal on desktop, Drawer on mobile.",
  openGraph: {
    title: "Revola",
    description: "One component. Modal on desktop, Drawer on mobile.",
    images: [
      {
        url: `/og?title=Revola&description=One component. Modal on desktop, Drawer on mobile.`,
      },
    ],
  },
  twitter: {
    title: "Revola",
    description: "One component. Modal on desktop, Drawer on mobile.",
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=Revola&description=One component. Modal on desktop, Drawer on mobile.`,
      },
    ],
  },
  creator: "@sameerjs6",
};

export default function Home() {
  return (
    <main className="relative">
      <RevolaHero />
    </main>
  );
}
