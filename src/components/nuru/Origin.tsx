import originBg from "@/assets/origin-pattern.jpg";

export function Origin() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <img src={originBg} alt="" loading="lazy" width={1920} height={1080}
            className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

          <div className="relative px-8 py-20 text-center sm:px-16 sm:py-28 lg:py-36">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Origin</div>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold tracking-tight text-ivory sm:text-5xl lg:text-6xl">
              Born from light.<br /><span className="text-gradient">Built for the world.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Nuru represents a new dawn for African-led technology — building tools that
              can compete globally while carrying a distinct identity of intelligence,
              resilience, and creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
