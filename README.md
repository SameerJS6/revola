# Revola

One component. Modal on desktop, Drawer on mobile.

A responsive dialog component that automatically adapts between drawer (mobile) and modal (desktop) modes.

Revola can replace your dialog, drawer, and alert dialog components with a single and simple solution.

![](/main-mockup.png)

## Features

- **Responsive by default** - Modal on desktop, drawer on mobile
- **Replaces multiple components** - Dialog, drawer, and alert dialog in one
- **Built on proven foundations** - Combines Radix UI Dialog and Vaul
- **Accessible** - ARIA compliant with keyboard navigation
- **Customizable** - Extensive API with snap points, directions, and styling options
- **TypeScript** - Full type safety out of the box

## Installation

```bash
npx shadcn@latest add https://revola.sameerjs.com/r/revola.json
```

## Usage

```tsx
import { Button } from "@/components/ui/button";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/revola";

export function Example() {
  return (
    <ResponsiveDialog>
      <ResponsiveDialogTrigger asChild>
        <Button variant="outline">Open Revola</Button>
      </ResponsiveDialogTrigger>
      <ResponsiveDialogContent>
        <div className="bg-background sm:p-6">
          <ResponsiveDialogHeader>
            <ResponsiveDialogTitle>Welcome</ResponsiveDialogTitle>
            <ResponsiveDialogDescription>
              This is a responsive modal that adapts between drawer & modal.
            </ResponsiveDialogDescription>
          </ResponsiveDialogHeader>
        </div>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
}
```

## Documentation

Visit [Docs](https://revola.sameerjs.com/docs) for full documentation, examples, and API reference.

## Credits

Built on top of:

- [Radix UI Dialog](https://radix-ui.com/primitives/docs/components/dialog) by [Radix UI](https://radix-ui.com)
- [Vaul](https://vaul.emilkowal.ski) by [Emil Kowalski](https://github.com/emilkowalski)

## License

MIT
