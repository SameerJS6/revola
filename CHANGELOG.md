# revola

## 1.0.0

### Major Changes

- Initial release of Revola - responsive dialog component that automatically adapts between modal (desktop) and drawer (mobile).

  ## Core Features:

  - **Responsive by default** - Modal on desktop, drawer on mobile
  - **Replaces multiple components** - Dialog, drawer, and alert dialog in one
  - **Built on proven foundations** - Combines Radix UI Dialog and Vaul
  - **Accessible** - ARIA compliant with keyboard navigation
  - **Customizable** - Extensive API with snap points, directions, and styling options
  - **TypeScript** - Full type safety out of the box

  ## API Features:

  ### Mode Control:

  - **`onlyDrawer`** - Forces drawer behavior on all screen sizes
  - **`onlyDialog`** - Forces modal/dialog behavior on all screen sizes
  - **`alert`** - Special alert dialog variant with forced modal behavior

  ### Drawer Customization:

  - **`direction`** - Drawer slide direction: `"top" | "right" | "bottom" | "left"`
  - **`shouldScaleBackground`** - Background scaling animation effect
  - **`modal`** - Controls modal behavior (backdrop interaction)
  - **`dismissible`** - Controls whether dialog can be dismissed
