import ShadcnCommandMenu from "@/registry/cmdk/examples/shadcn-command-menu";
import { getColors } from "@/lib/colors";
import { source } from "@/lib/source";

export default function CommandMenuWrapper() {
  const colors = getColors();
  const pageTree = source.pageTree;

  return (
    <div className="space-x-4 space-y-4">
      <ShadcnCommandMenu tree={pageTree} colors={colors} />
    </div>
  );
}
