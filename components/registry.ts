import * as React from "react";

type RegistryType = "registry:demo" | "registry:component";

interface Registry {
  name: string;
  description: string;
  type: RegistryType;
  registryDependencies?: string[];
  files: { path: string; type: RegistryType; target: string }[];
  categories?: string[];
  component: React.LazyExoticComponent<() => React.JSX.Element>;
  source: string;
  meta?: string;
}

type PrefixedKey<TLibrary extends string, TKey extends string> = `${TLibrary}-${TKey}`;

type CmdkRegistryKeys = "default-demo" | "combobox-demo";

type VaulRegistryKeys =
  | "default-demo"
  | "side-drawer-demo"
  | "scrollable-demo"
  | "controlled-demo"
  | "default-snap-points-demo"
  | "interact-with-background-snap-points-demo"
  | "snap-to-sequential-points-snap-points-demo"
  | "custom-fade-index-snap-points-demo"
  | "default-input-demo"
  | "no-repositioning-input-demo"
  | "other-default-demo"
  | "non-dismissible-default-demo"
  | "alert-revola-demo";

type OriginUIRegistryKeys =
  | "alert-dialog-with-icon-demo"
  | "alert-dialog-demo"
  | "delete-project-demo"
  | "otp-code-demo"
  | "sign-in-demo"
  | "sign-up-demo"
  | "feedback-demo"
  | "newsletter-demo"
  | "rating-demo"
  | "checkout-demo"
  | "credit-card-demo"
  | "change-plan-demo"
  | "edit-profile-demo"
  | "invite-members-demo"
  | "onboarding-demo"
  | "custom-scrollbar-demo"
  | "native-scrollbar-demo"
  | "sticky-footer-demo"
  | "sticky-header-demo"
  | "terms-and-conditions-demo"
  | "search-command-demo";

export type RegistryKeys =
  | PrefixedKey<"vaul", VaulRegistryKeys>
  | PrefixedKey<"origin-ui", OriginUIRegistryKeys>
  | PrefixedKey<"cmdk", CmdkRegistryKeys>;

export const Index: Record<RegistryKeys, Registry> = {
  "vaul-default-demo": {
    name: "vaul-default-demo",
    description: "Default responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/default/default-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/default/default-demo")),
    source: "",
    meta: undefined,
  },
  "vaul-side-drawer-demo": {
    name: "vaul-side-drawer-demo",
    description: "Side drawer responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/default/side-drawer-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/default/side-drawer-demo")),
    source: "",
    meta: undefined,
  },
  "vaul-scrollable-demo": {
    name: "vaul-scrollable-demo",
    description: "Scrollable responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/default/scrollable-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/default/scrollable-demo")),
    source: "",
    meta: undefined,
  },
  "vaul-controlled-demo": {
    name: "vaul-controlled-demo",
    description: "Controlled responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/default/controlled-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/default/controlled-demo")),
    source: "",
    meta: undefined,
  },
  "vaul-default-snap-points-demo": {
    name: "vaul-default-snap-points-demo",
    description: "Default snap points responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/snap-points/default.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/snap-points/default")),
    source: "",
    meta: undefined,
  },
  "vaul-interact-with-background-snap-points-demo": {
    name: "vaul-interact-with-background-snap-points-demo",
    description: "Interactive background snap points demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/snap-points/interact-with-background.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/snap-points/interact-with-background")),
    source: "",
    meta: undefined,
  },
  "vaul-snap-to-sequential-points-snap-points-demo": {
    name: "vaul-snap-to-sequential-points-snap-points-demo",
    description: "Sequential snap points demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/snap-points/snap-to-sequential-points.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/snap-points/snap-to-sequential-points")),
    source: "",
    meta: undefined,
  },
  "vaul-custom-fade-index-snap-points-demo": {
    name: "vaul-custom-fade-index-snap-points-demo",
    description: "Custom fade index snap points demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/snap-points/custom-fade-index.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/snap-points/custom-fade-index")),
    source: "",
    meta: undefined,
  },
  "vaul-default-input-demo": {
    name: "vaul-default-input-demo",
    description: "Default input responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/inputs/default.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/inputs/default")),
    source: "",
    meta: undefined,
  },
  "vaul-no-repositioning-input-demo": {
    name: "vaul-no-repositioning-input-demo",
    description: "No repositioning input demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/inputs/no-repositioning.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/inputs/no-repositioning")),
    source: "",
    meta: undefined,
  },
  "vaul-other-default-demo": {
    name: "vaul-other-default-demo",
    description: "Other default responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/other/default.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/other/default")),
    source: "",
    meta: undefined,
  },
  "vaul-non-dismissible-default-demo": {
    name: "vaul-non-dismissible-default-demo",
    description: "Non-dismissible responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/other/non-dismissiable.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/other/non-dismissiable")),
    source: "",
    meta: undefined,
  },
  "vaul-alert-revola-demo": {
    name: "vaul-alert-revola-demo",
    description: "Alert responsive dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/vaul/other/alert-revola.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: undefined,
    component: React.lazy(() => import("@/registry/revola/examples/vaul/other/alert-revola")),
    source: "",
    meta: undefined,
  },
  "origin-ui-alert-dialog-with-icon-demo": {
    name: "origin-ui-alert-dialog-with-icon-demo",
    description: "Alert dialog with icon demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/alerts/alert-dialog-with-icon.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["alerts"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/alerts/alert-dialog-with-icon")),
    source: "",
    meta: undefined,
  },
  "origin-ui-alert-dialog-demo": {
    name: "origin-ui-alert-dialog-demo",
    description: "Basic alert dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/alerts/alert-dialog.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["alerts"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/alerts/alert-dialog")),
    source: "",
    meta: undefined,
  },
  "origin-ui-delete-project-demo": {
    name: "origin-ui-delete-project-demo",
    description: "Delete project confirmation dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/alerts/delete-project.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["alerts"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/alerts/delete-project")),
    source: "",
    meta: undefined,
  },
  // Forms - Authentication
  "origin-ui-otp-code-demo": {
    name: "origin-ui-otp-code-demo",
    description: "OTP code verification dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/forms/authentication/otp-code.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["forms", "authentication"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/forms/authentication/otp-code")),
    source: "",
    meta: undefined,
  },
  "origin-ui-sign-in-demo": {
    name: "origin-ui-sign-in-demo",
    description: "Sign in form dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/forms/authentication/sign-in.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["forms", "authentication"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/forms/authentication/sign-in")),
    source: "",
    meta: undefined,
  },
  "origin-ui-sign-up-demo": {
    name: "origin-ui-sign-up-demo",
    description: "Sign up form dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/forms/authentication/sign-up.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["forms", "authentication"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/forms/authentication/sign-up")),
    source: "",
    meta: undefined,
  },
  // Forms - Feedback
  "origin-ui-feedback-demo": {
    name: "origin-ui-feedback-demo",
    description: "Feedback form dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/forms/feedback/feedback.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["forms", "feedback"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/forms/feedback/feedback")),
    source: "",
    meta: undefined,
  },
  "origin-ui-newsletter-demo": {
    name: "origin-ui-newsletter-demo",
    description: "Newsletter subscription dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/forms/feedback/newsletter.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["forms", "feedback"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/forms/feedback/newsletter")),
    source: "",
    meta: undefined,
  },
  "origin-ui-rating-demo": {
    name: "origin-ui-rating-demo",
    description: "Rating form dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/forms/feedback/rating.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["forms", "feedback"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/forms/feedback/rating")),
    source: "",
    meta: undefined,
  },
  // Forms - Payment
  "origin-ui-checkout-demo": {
    name: "origin-ui-checkout-demo",
    description: "Checkout form dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui-esm/checkout-esm.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["forms", "payment"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui-esm/checkout-esm")),
    source: "",
    meta: undefined,
  },
  "origin-ui-credit-card-demo": {
    name: "origin-ui-credit-card-demo",
    description: "Credit card form dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui-esm/credit-card-esm.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["forms", "payment"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui-esm/credit-card-esm")),
    source: "",
    meta: undefined,
  },
  // Forms - User Profile
  "origin-ui-change-plan-demo": {
    name: "origin-ui-change-plan-demo",
    description: "Change plan dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/forms/user-profile/change-plan.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["forms", "user-profile"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/forms/user-profile/change-plan")),
    source: "",
    meta: undefined,
  },
  "origin-ui-edit-profile-demo": {
    name: "origin-ui-edit-profile-demo",
    description: "Edit profile dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui-esm/edit-profile-esm.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["forms", "user-profile"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui-esm/edit-profile-esm")),
    source: "",
    meta: undefined,
  },
  // Management
  "origin-ui-invite-members-demo": {
    name: "origin-ui-invite-members-demo",
    description: "Invite team members dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/management/invite-members.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["management"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/management/invite-members")),
    source: "",
    meta: undefined,
  },
  // Onboarding
  "origin-ui-onboarding-demo": {
    name: "origin-ui-onboarding-demo",
    description: "Onboarding flow dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui-esm/onboarding-esm.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["onboarding"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui-esm/onboarding-esm")),
    source: "",
    meta: undefined,
  },
  // Scrollables
  "origin-ui-custom-scrollbar-demo": {
    name: "origin-ui-custom-scrollbar-demo",
    description: "Custom scrollbar dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/scrollables/custom-scrollbar.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["scrollables"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/scrollables/custom-scrollbar")),
    source: "",
    meta: undefined,
  },
  "origin-ui-native-scrollbar-demo": {
    name: "origin-ui-native-scrollbar-demo",
    description: "Native scrollbar dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/scrollables/native-scrollbar.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["scrollables"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/scrollables/native-scrollbar")),
    source: "",
    meta: undefined,
  },
  "origin-ui-sticky-footer-demo": {
    name: "origin-ui-sticky-footer-demo",
    description: "Sticky footer scrollable dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/scrollables/sticky-footer.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["scrollables"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/scrollables/sticky-footer")),
    source: "",
    meta: undefined,
  },
  "origin-ui-sticky-header-demo": {
    name: "origin-ui-sticky-header-demo",
    description: "Sticky header scrollable dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/scrollables/sticky-header.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["scrollables"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/scrollables/sticky-header")),
    source: "",
    meta: undefined,
  },
  "origin-ui-terms-and-conditions-demo": {
    name: "origin-ui-terms-and-conditions-demo",
    description: "Terms and conditions scrollable dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/revola/examples/origin-ui/scrollables/terms-and-conditions.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    categories: ["scrollables"],
    component: React.lazy(() => import("@/registry/revola/examples/origin-ui/scrollables/terms-and-conditions")),
    source: "",
    meta: undefined,
  },
  "origin-ui-search-command-demo": {
    name: "origin-ui-search-command-demo",
    description: "Search command dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/cmdk/examples/search-command.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(() => import("@/registry/cmdk/examples/search-command")),
    source: "",
    meta: undefined,
  },
  "cmdk-default-demo": {
    name: "cmdk-default-demo",
    description: "Default command dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/cmdk/examples/default-demo.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(() => import("@/registry/cmdk/examples/default-demo")),
    source: "",
    meta: undefined,
  },
  "cmdk-combobox-demo": {
    name: "cmdk-combobox-demo",
    description: "Combobox command dialog demo",
    type: "registry:demo",
    registryDependencies: undefined,
    files: [
      {
        path: "registry/cmdk/examples/combobox-command.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(() => import("@/registry/cmdk/examples/combobox-command")),
    source: "",
    meta: undefined,
  },
};
