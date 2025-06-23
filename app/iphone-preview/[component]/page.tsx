import { Index, type RegistryKeys } from "@/components/registry";
import { notFound } from "next/navigation";
import React from "react";

interface MobilePreviewPageProps {
  params: Promise<{
    component: RegistryKeys;
  }>;
}

export default async function MobilePreviewPage({ params }: MobilePreviewPageProps) {
  const { component } = await params;
  const registryEntry = Index[component];

  if (!registryEntry) {
    notFound();
  }

  const Component = registryEntry.component;

  return (
    <main className="grid min-h-dvh place-content-center">
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center p-8">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
          </div>
        }
      >
        <Component />
      </React.Suspense>
    </main>
  );
}

// Generate static params for all registry components
export async function generateStaticParams() {
  return Object.keys(Index).map((component) => ({
    component,
  }));
}
