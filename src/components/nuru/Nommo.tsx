import { Sparkles } from "lucide-react";

export function Nommo() {
  return (
    <section id="nommo" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="lg:order-2">
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
            Nommo · AI <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">Coming Soon</span>
          </div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Nommo: intelligence with <span className="text-gradient">voice, memory, and purpose</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Nommo is the AI layer of Nuru — designed to support reasoning, automation,
            research, coding, and intelligent digital work.
          </p>
        </div>

        <div className="lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-sunrise opacity-15 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl glass p-5">
              <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-sunrise grid place-items-center">
                    <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-medium text-ivory">Nommo</div>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">session · 0x91a</div>
              </div>

              <div className="space-y-4">
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-secondary/70 px-4 py-3 text-sm text-ivory">
                  Explain this Enkai function.
                </div>
                <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-border bg-background/40 px-4 py-3 text-sm text-foreground">
                  <div className="mb-2 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gold">
                    <Sparkles className="h-3 w-3" /> Nommo
                  </div>
                  This function declares <code className="rounded bg-secondary px-1 font-mono text-xs text-gold">main</code> as
                  the program entry. It binds the string <em>"Build with Enkai"</em> to{" "}
                  <code className="rounded bg-secondary px-1 font-mono text-xs text-gold">message</code>,
                  then prints it. The <code className="rounded bg-secondary px-1 font-mono text-xs text-gold">::</code> markers
                  delimit the block — Enkai's clean alternative to braces.
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  <div className="text-xs text-muted-foreground">Nommo is thinking…</div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2.5 text-sm text-muted-foreground">
                Ask Nommo anything…
                <span className="ml-auto rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground">⌘K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
