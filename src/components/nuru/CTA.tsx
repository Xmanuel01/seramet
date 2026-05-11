import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section id="waitlist" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-semibold tracking-tight text-ivory sm:text-5xl lg:text-6xl">
          Start with <span className="text-gradient">Enkai</span>.<br />
          Build the future with Nuru.
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#enkai"
            className="group inline-flex items-center gap-2 rounded-full bg-sunrise px-7 py-4 text-sm font-medium text-primary-foreground glow transition-transform hover:scale-[1.03]">
            Explore Enkai
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-7 py-4 text-sm font-medium text-ivory backdrop-blur hover:bg-secondary/60">
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
