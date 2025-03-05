import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <footer className="row-start-3 flex flex-wrap items-center justify-center gap-4">
      <Link
        className={buttonVariants({ variant: "outline" })}
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
        Learn
      </Link>
      <Link
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline" })}
      >
        <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
        Examples
      </Link>
      <Link
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonVariants({ variant: "outline" })}
      >
        <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
        Go to nextjs.org →
      </Link>
    </footer>
  );
}
