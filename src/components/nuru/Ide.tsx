import { FileCode, Folder, Sparkles, Terminal, CircleDot } from "lucide-react";

export function Ide() {
  return (
    <section id="ide" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold">
            Seramet IDE <span className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted-foreground">In Development</span>
          </div>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
            The workspace for the <span className="text-gradient">Enkai era</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A focused, AI-assisted development environment for writing, testing,
            debugging, and building with Enkai.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-sunrise opacity-15 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.86_0.15_82_/_0.25)] bg-[oklch(0.11_0.012_50)] shadow-[0_30px_120px_-20px_oklch(0_0_0_/_0.8)]">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.62_0.2_25)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_75)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.14_150)]" />
              </div>
              <div className="font-mono text-xs text-muted-foreground">seramet-ide · enkai-starter</div>
              <div className="text-[10px] uppercase tracking-wider text-gold">v0.0.1</div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-12 min-h-[440px]">
              {/* Sidebar */}
              <aside className="col-span-3 hidden border-r border-border bg-card/40 p-3 lg:block">
                <div className="mb-2 px-2 text-[10px] uppercase tracking-wider text-muted-foreground">Explorer</div>
                {["src", "tests", "build"].map((f, i) => (
                  <div key={f} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:bg-secondary">
                    <Folder className="h-3.5 w-3.5 text-gold" /> {f}
                  </div>
                ))}
                <div className="mt-1 ml-3 space-y-0.5">
                  {["main.enkai", "lib.enkai", "ai.enkai"].map((f, i) => (
                    <div key={f} className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${i === 0 ? "bg-secondary text-ivory" : "text-muted-foreground hover:bg-secondary/60"}`}>
                      <FileCode className="h-3.5 w-3.5" /> {f}
                    </div>
                  ))}
                </div>
              </aside>

              {/* Editor */}
              <div className="col-span-12 lg:col-span-6 border-r border-border">
                <div className="border-b border-border px-4 py-2 font-mono text-xs text-muted-foreground">main.enkai</div>
                <pre className="p-5 font-mono text-xs leading-relaxed">
                  <code>
                    <span className="text-muted-foreground"> 1  // dawn engine</span>{"\n"}
                    <span className="text-muted-foreground"> 2  </span><span className="text-[oklch(0.78_0.16_55)]">import</span> <span className="text-ivory">ai</span> <span className="text-muted-foreground">from</span> <span className="text-[oklch(0.82_0.14_140)]">"seramet/nommo"</span>{"\n"}
                    <span className="text-muted-foreground"> 3</span>{"\n"}
                    <span className="text-muted-foreground"> 4  </span><span className="text-[oklch(0.78_0.16_55)]">start</span> <span className="text-[oklch(0.86_0.15_82)]">main</span> <span className="text-muted-foreground">::</span>{"\n"}
                    <span className="text-muted-foreground"> 5      </span><span className="text-[oklch(0.78_0.16_55)]">let</span> <span className="text-ivory">prompt</span> <span className="text-muted-foreground">:=</span> <span className="text-[oklch(0.82_0.14_140)]">"Greet the world"</span>{"\n"}
                    <span className="text-muted-foreground"> 6      </span><span className="text-[oklch(0.78_0.16_55)]">let</span> <span className="text-ivory">reply</span> <span className="text-muted-foreground">:=</span> <span className="text-ivory">ai</span><span className="text-muted-foreground">.</span><span className="text-[oklch(0.86_0.15_82)]">ask</span><span className="text-muted-foreground">(</span><span className="text-ivory">prompt</span><span className="text-muted-foreground">)</span>{"\n"}
                    <span className="text-muted-foreground"> 7      </span><span className="text-[oklch(0.86_0.15_82)]">print</span><span className="text-muted-foreground">(</span><span className="text-ivory">reply</span><span className="text-muted-foreground">)</span>{"\n"}
                    <span className="text-muted-foreground"> 8  ::</span>
                  </code>
                </pre>
              </div>

              {/* AI panel */}
              <aside className="col-span-12 lg:col-span-3 bg-card/40 p-4">
                <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-wider text-gold">
                  <Sparkles className="h-3 w-3" /> Nommo Assistant
                </div>
                <div className="space-y-3 text-xs">
                  <div className="rounded-lg border border-border bg-background/40 p-3 text-muted-foreground">
                    Suggested: extract <span className="text-gold">prompt</span> to a constant for reuse.
                  </div>
                  <div className="rounded-lg border border-border bg-background/40 p-3 text-muted-foreground">
                    Add error handling around <span className="text-gold">ai.ask()</span>?
                  </div>
                </div>
              </aside>
            </div>

            {/* Terminal */}
            <div className="border-t border-border bg-[oklch(0.09_0.012_50)] p-3 font-mono text-xs">
              <div className="mb-1 flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                <Terminal className="h-3 w-3" /> terminal
              </div>
              <div className="text-muted-foreground">$ enkai run main.enkai</div>
              <div className="text-ivory">Hello, world. Built with Enkai.</div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between border-t border-border bg-[oklch(0.16_0.018_55)] px-4 py-1.5 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-2">
                <CircleDot className="h-3 w-3 text-gold" />
                Enkai project ready
              </div>
              <div className="flex items-center gap-4">
                <span>main</span><span>UTF-8</span><span>Ln 6, Col 28</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
