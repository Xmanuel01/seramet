import { BookOpen, Github, Download } from "lucide-react";

export function Enkai() {
  return (
    <section id="enkai" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">Enkai · Language</div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
            Enkai is the <span className="text-gradient">first step</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Enkai is Seramet's programming language built for modern developers,
            AI workflows, performance experiments, and future intelligent systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#docs" className="inline-flex items-center gap-2 rounded-full bg-sunrise px-5 py-3 text-sm font-medium text-primary-foreground glow transition-transform hover:scale-[1.03]">
              <BookOpen className="h-4 w-4" /> Read Documentation
            </a>
            <a href="#github" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-3 text-sm font-medium text-ivory hover:bg-secondary/70">
              <Github className="h-4 w-4" /> View GitHub
            </a>
            <a href="#install" className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-3 text-sm font-medium text-ivory hover:bg-secondary/70">
              <Download className="h-4 w-4" /> Install Enkai
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-sunrise opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.86_0.15_82_/_0.3)] bg-[oklch(0.11_0.012_50)] glow">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.62_0.2_25)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_75)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.14_150)]" />
              </div>
              <div className="font-mono text-xs text-muted-foreground">main.enkai</div>
              <div className="text-[10px] uppercase tracking-wider text-gold">Enkai 0.1</div>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
              <code>
                <span className="text-muted-foreground">// dawn of a new program</span>{"\n"}
                <span className="text-[oklch(0.78_0.16_55)]">start</span>{" "}
                <span className="text-[oklch(0.86_0.15_82)]">main</span>{" "}
                <span className="text-muted-foreground">::</span>{"\n"}
                {"    "}<span className="text-[oklch(0.78_0.16_55)]">let</span>{" "}
                <span className="text-ivory">message</span>{" "}
                <span className="text-muted-foreground">:=</span>{" "}
                <span className="text-[oklch(0.82_0.14_140)]">"Build with Enkai"</span>{"\n"}
                {"    "}<span className="text-[oklch(0.86_0.15_82)]">print</span>
                <span className="text-muted-foreground">(</span>
                <span className="text-ivory">message</span>
                <span className="text-muted-foreground">)</span>{"\n"}
                <span className="text-muted-foreground">::</span>
              </code>
            </pre>
            <div className="border-t border-border bg-card/50 px-5 py-2.5 font-mono text-xs text-muted-foreground">
              <span className="text-gold">▸</span> compiled in 0.04s · 0 errors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
