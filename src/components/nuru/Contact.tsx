import { useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      setStatus("error");
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }

    setStatus("submitting");
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert(parsed.data);

    if (dbError) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact-form" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left — heading */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold">
              Contact
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ivory sm:text-5xl">
              Let's build the <span className="text-gradient">future</span> together.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Whether you're a developer, researcher, or partner — reach out. We
              read every message.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/30">
                  <Mail className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</div>
                  <div className="text-sm text-ivory">hello@seramet.ai</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/30">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Based</div>
                  <div className="text-sm text-ivory">Global · Africa-rooted</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={onSubmit}
            className="glass relative rounded-2xl border border-border p-6 sm:p-8"
          >
            <div className="space-y-5">
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Ada Okonkwo"
                disabled={status === "submitting"}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="ada@company.com"
                disabled={status === "submitting"}
              />
              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  disabled={status === "submitting"}
                  maxLength={2000}
                  placeholder="Tell us what you're building…"
                  className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-ivory placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold/60"
                />
              </div>

              {status === "success" && (
                <StatusBox icon={<CheckCircle2 className="h-4 w-4" />} tone="success">
                  Message sent. We'll be in touch soon.
                </StatusBox>
              )}
              {status === "error" && error && (
                <StatusBox icon={<AlertCircle className="h-4 w-4" />} tone="error">
                  {error}
                </StatusBox>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-sunrise px-6 py-3.5 text-sm font-medium text-primary-foreground glow transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, id, value, onChange, placeholder, type = "text", disabled,
}: {
  label: string; id: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-ivory placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold/60"
      />
    </div>
  );
}

function StatusBox({
  icon, tone, children,
}: { icon: React.ReactNode; tone: "success" | "error"; children: React.ReactNode }) {
  const cls =
    tone === "success"
      ? "border-[oklch(0.7_0.15_150_/_0.4)] bg-[oklch(0.3_0.08_150_/_0.2)] text-[oklch(0.85_0.12_150)]"
      : "border-destructive/40 bg-destructive/10 text-destructive";
  return (
    <div className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${cls}`}>
      {icon}
      <span>{children}</span>
    </div>
  );
}
