const stats = [
  { label: "Performance experiments", value: "Iterating" },
  { label: "Memory optimisation research", value: "Active" },
  { label: "AI-specialised language design", value: "Core focus" },
  { label: "Security-focused development", value: "Foundational" },
];

export function Research() {
  return (
    <section id="research" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">Research</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Research-driven <span className="text-gradient">technology</span>.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl glass p-7">
              <div className="font-display text-2xl font-semibold text-gradient">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          Benchmarks and technical reports will be published as Enkai matures.
        </p>
      </div>
    </section>
  );
}
