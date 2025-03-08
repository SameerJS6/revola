import CreditCardDialogExample from "@/components/native-modal/examples/credit-card-dialog-example";
import CreditCardDrawerExample from "@/components/native-modal/examples/credit-card-drawer-example";
import CreditCardNativeModalExample from "@/components/native-modal/examples/credit-card-native-modal-example";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center">
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <ThemeToggle />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <CreditCardDialogExample />
        <CreditCardDrawerExample />
        <CreditCardNativeModalExample />
      </div>
    </main>
  );
}
