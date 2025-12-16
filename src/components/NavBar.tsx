import Link from "next/link";
import { navigation } from "@/data/navigation";
import { cn } from "@/utils/cn";

export const NavBar = () => {
  return (
    <header className="flex items-center justify-between py-6" id="home">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        KuchikiRenji
      </Link>
      <nav className="hidden items-center gap-6 text-sm sm:flex">
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "text-primary/80 transition hover:text-accent",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href="#contact"
        className={cn(
          "rounded-full border border-accent px-3 py-2 text-sm font-medium text-accent",
          "transition hover:bg-accent hover:text-primary",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        )}
      >
        Let&apos;s chat
      </Link>
    </header>
  );
};

export default NavBar;

