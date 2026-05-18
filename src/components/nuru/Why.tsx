import { Cpu, Wrench, ShieldCheck, Sun } from "lucide-react";

const blocks = [
  { icon: Cpu, title: "AI-native systems", desc: "Designed from the foundation for modern intelligence and reasoning workloads." },
  { icon: Wrench, title: "Developer-first tools", desc: "Ergonomic syntax, fast feedback loops, and tools that respect your time." },
  { icon: ShieldCheck, title: "Secure foundations", desc: "Memory and execution models built with safety as a default, not an addon." },
  { icon: Sun, title: "African × global", desc: "Born in Africa, built for the world — distinct identity, universal ambition." },
];

export function Why() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">Why Seramet</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Built for builders, thinkers,<br />
            and the next generation of <span className="text-gradient">intelligence</span>.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b) => (
            <div key={b.title} className="bg-card/60 p-8 backdrop-blur transition-colors hover:bg-card">
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sunrise/20 ring-1 ring-[oklch(0.86_0.15_82_/_0.4)]">
                <b.icon className="h-4 w-4 text-gold" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ivory">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
