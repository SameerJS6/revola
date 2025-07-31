# Revola

## 1.3.0

### Minor Changes

- **Added:** Shadcn Command Menu integration with enhanced search functionality
- **Added:** Custom code highlighting and block components similar to Fumadocs
- **Breaking:** Exported `useResponsiveDialog` context hook for enhanced component integration

### Added

- **Dynamic Height for ResponsiveCommandList** - Mobile drawers now use full height (`max-h-[95%]`) instead of hardcoded `320px` for better mobile experience, while maintaining `320px` for dialog mode
- **Enhanced Component Preview System** - New unified component preview for components that can't be handled through the main registry
- **Special Registry** - Dedicated registry for components requiring custom parsing logic

### Changed

- **Performance Improvement:** Updated `use-media-query.tsx` to use `change` event listener instead of `resize` for better re-render performance
- **UI Library Migration:** Replaced Radix UI with Base UI for `Tabs` and `ScrollArea` components
- **Visual Adjustments:** Reduced maximum height from `95%` to `65%` for improved viewport utilization

### Improved

- **Documentation:** Updated roadmap, getting-started, and command documentation for better developer experience
- **Developer Experience:** Enhanced component preview system with better flexibility and customization options

## 1.2.0

### Minor Changes

- **Breaking:** Renamed `DrawerType` to `ResponsiveDialogProps` and now exports the type publicly
- **Added:** Command component integration with Revola for enhanced search functionality

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

---

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
