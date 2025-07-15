# revola

## 1.1.0

### Minor Changes

- ## v1.1.0

  ### Added

  - **Origin UI Examples** - Complete set of dialog component examples from Origin UI library
  - **Enhanced Documentation** - Comprehensive docs for Origin UI examples and updated getting started guide
  - **Improved API Design** - New `showCloseButton` prop for better Shadcn Dialog compatibility

  ### Changed

  - **Breaking:** Replaced `hideCloseButton` prop with `showCloseButton` for better alignment with Shadcn's Dialog API
  - **Visual Improvements:**
    - Increased default overlay opacity from 40% to 50% for better contrast
    - Reversed footer button positioning from `flex-col` to `flex-col-reverse` to align with Shadcn's default dialog behavior
    - Updated `ResponsiveDialogContent` max-height to `max-h-[calc(100dvh-4rem)]` for better viewport handling
  - **Smart Behavior:** Alert dialogs now automatically hide the close button when using the `alert` prop

  ### Fixed

  - **Accessibility:** Restored proper auto-focus behavior for Radix Dialog components
  - **UI Issues:**
    - Fixed hover state styles for mobile preview trigger button in light mode
    - Resolved screen reader accessibility error for mobile preview component
  - **Code Quality:** Improved dialog key naming with library-specific prefixes and refined styling conventions

  ### Improved

  - **Developer Experience:** All Vaul examples updated to use the new `showCloseButton={false}` syntax
  - **Consistency:** Standardized prop conventions across all dialog variants

- ## v1.1.0

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
