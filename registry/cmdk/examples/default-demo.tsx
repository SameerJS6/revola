import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";

import {
  ResponsiveCommand,
  ResponsiveCommandEmpty,
  ResponsiveCommandGroup,
  ResponsiveCommandInput,
  ResponsiveCommandItem,
  ResponsiveCommandList,
  ResponsiveCommandSeparator,
  ResponsiveCommandShortcut,
} from "@/components/ui/command";

export default function CommandDemo() {
  return (
    <ResponsiveCommand className="not-prose rounded-lg border shadow-md md:min-w-[350px] md:max-w-[450px]">
      <ResponsiveCommandInput placeholder="Type a command or search..." />
      <ResponsiveCommandList>
        <ResponsiveCommandEmpty>No results found.</ResponsiveCommandEmpty>
        <ResponsiveCommandGroup heading="Suggestions">
          <ResponsiveCommandItem>
            <Calendar />
            <span>Calendar</span>
          </ResponsiveCommandItem>
          <ResponsiveCommandItem>
            <Smile />
            <span>Search Emoji</span>
          </ResponsiveCommandItem>
          <ResponsiveCommandItem disabled>
            <Calculator />
            <span>Calculator</span>
          </ResponsiveCommandItem>
        </ResponsiveCommandGroup>
        <ResponsiveCommandSeparator />
        <ResponsiveCommandGroup heading="Settings">
          <ResponsiveCommandItem>
            <User />
            <span>Profile</span>
            <ResponsiveCommandShortcut>⌘P</ResponsiveCommandShortcut>
          </ResponsiveCommandItem>
          <ResponsiveCommandItem>
            <CreditCard />
            <span>Billing</span>
            <ResponsiveCommandShortcut>⌘B</ResponsiveCommandShortcut>
          </ResponsiveCommandItem>
          <ResponsiveCommandItem>
            <Settings />
            <span>Settings</span>
            <ResponsiveCommandShortcut>⌘S</ResponsiveCommandShortcut>
          </ResponsiveCommandItem>
        </ResponsiveCommandGroup>
      </ResponsiveCommandList>
    </ResponsiveCommand>
  );
}
