import { Index, type RegistryKeys } from "@/components/registry";

/**
 * Generate a mobile preview link for a component
 * @param componentName The name of the component in the registry
 * @param origin The origin of the page
 * @returns The mobile preview URL or null if component doesn't exist
 */
export function generateMobilePreviewLink(componentName: RegistryKeys, origin: string): string | null {
  if (!Index[componentName]) {
    console.warn(`Component "${componentName}" not found in registry`);
    return null;
  }

  return `${origin}/iphone-preview/${componentName}`;
}

/**
 * Get all available component names from the registry
 * @returns Array of component names
 */

export function getAvailableComponents(): RegistryKeys[] {
  return Object.keys(Index) as RegistryKeys[];
}

/**
 * Check if a component exists in the registry
 * @param componentName The name of the component to check
 * @returns True if component exists, false otherwise
 */
export function componentExists(componentName: RegistryKeys): boolean {
  return componentName in Index;
}
