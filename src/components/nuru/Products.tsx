import { ArrowUpRight, Code2, Brain, MonitorCog } from "lucide-react";

const items = [
  {
    icon: Code2, name: "Enkai", status: "Available · Developer Preview", live: true,
    desc: "A next-generation programming language designed for speed, safety, AI workflows, and modern software development.",
    cta: "Visit Enkai", href: "#enkai",
  },
  {
    icon: Brain, name: "Nommo", status: "Coming Soon", live: false,
    desc: "An intelligent AI system designed to assist reasoning, automation, research, coding, and digital productivity.",
    cta: "Preview Nommo", href: "#nommo",
  },
  {
    icon: MonitorCog, name: "Nuru IDE", status: "In Development", live: false,
    desc: "A modern development environment built for Enkai, AI-assisted coding, secure workflows, and future software engineering.",
    cta: "Explore IDE", href: "#ide",
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">Ecosystem</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
            One company.<br /><span className="text-gradient">Three powerful foundations.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.name}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition-all hover:-translate-y-1 hover:ring-gold">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sunrise opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/60">
                  <it.icon className="h-5 w-5 text-gold" />
                </div>

                <div className="mb-3 flex items-center gap-2">
                  <h3 className="font-display text-2xl font-semibold text-ivory">{it.name}</h3>
                  <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                    it.live
                      ? "bg-sunrise text-primary-foreground"
                      : "border border-border text-muted-foreground"
                  }`}>
                    {it.live ? "Live" : "Soon"}
                  </span>
                </div>

                <div className="mb-4 text-xs text-muted-foreground">{it.status}</div>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>

                <a href={it.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors hover:text-ivory">
                  {it.cta} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
