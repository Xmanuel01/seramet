import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Products", href: "#products" },
  { label: "Enkai", href: "#enkai" },
  { label: "Nommo", href: "#nommo" },
  { label: "IDE", href: "#ide" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" aria-label="Seramet home"><Logo /></a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-ivory">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#waitlist"
            className="text-sm text-muted-foreground transition-colors hover:text-ivory">
            Join Waitlist
          </a>
          <a href="#enkai"
            className="group inline-flex items-center gap-1.5 rounded-full bg-sunrise px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] glow">
            Explore Enkai
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-ivory lg:hidden" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-secondary">
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a href="#waitlist" onClick={() => setOpen(false)}
                className="rounded-full border border-border px-4 py-3 text-center text-sm">Join Waitlist</a>
              <a href="#enkai" onClick={() => setOpen(false)}
                className="rounded-full bg-sunrise px-4 py-3 text-center text-sm font-medium text-primary-foreground">Explore Enkai</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
