import { ArrowUpRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-core.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-sunrise opacity-20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:px-10">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            A new dawn for intelligent systems
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            Seramet builds{" "}
            <span className="text-gradient">intelligence</span>
            <br className="hidden sm:block" /> for a new era.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From <span className="text-ivory">Enkai</span>, our next-generation programming language,
            to <span className="text-ivory">Nommo AI</span> and the <span className="text-ivory">Seramet IDE</span>,
            we are creating tools for developers, businesses, and future AI systems.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#enkai"
              className="group inline-flex items-center gap-2 rounded-full bg-sunrise px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] glow">
              Explore Enkai
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-6 py-3.5 text-sm font-medium text-ivory backdrop-blur transition-colors hover:bg-secondary/60">
              View Products
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
            <div><div className="text-ivory font-display text-2xl">3</div>foundations</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-ivory font-display text-2xl">01</div>language live</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="text-ivory font-display text-2xl">∞</div>possibilities</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-sunrise opacity-20 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[oklch(0.86_0.15_82_/_0.25)] glow">
            <img src={heroImg} alt="Seramet neural sunrise core"
              width={1536} height={1536}
              className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-border bg-background/60 px-4 py-3 backdrop-blur-xl">
              <div className="text-xs text-muted-foreground">core.nuru / dawn-engine</div>
              <div className="flex items-center gap-1.5 text-xs text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
