import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const groups = [
  { title: "Products", links: ["Enkai", "Nommo", "Seramet IDE"] },
  { title: "Company", links: ["About", "Research", "Blog", "Careers"] },
  { title: "Developers", links: ["Docs", "GitHub", "Community"] },
  { title: "Contact", links: ["hello@seramet.ai", "Press", "Support"] },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Seramet is building intelligent systems, developer tools, and programming
              infrastructure for a new era — born from light, built for the world.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {groups.map((g) => (
              <div key={g.title}>
                <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">{g.title}</div>
                <ul className="space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-ivory">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© 2026 Seramet. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory">Privacy</a>
            <a href="#" className="hover:text-ivory">Terms</a>
            <a href="#" className="hover:text-ivory">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
