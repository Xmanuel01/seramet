import { useMemo, useRef, useState } from "react";
import { Loader2, Send, CheckCircle2, AlertCircle, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

type FormState = z.infer<typeof schema>;
type FieldName = keyof FormState;
type FieldErrors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const THROTTLE_KEY = "seramet_contact_last_submit";
const THROTTLE_MS = 60_000;
const MIN_FILL_MS = 2_000;

function validateAll(values: FormState): FieldErrors {
  const result = schema.safeParse(values);
  if (result.success) return {};
  const errs: FieldErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as FieldName | undefined;
    if (key && !errs[key]) errs[key] = issue.message;
  }
  return errs;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [website, setWebsite] = useState(""); // honeypot
  const mountedAt = useRef(Date.now());

  const errors = useMemo(() => validateAll(form), [form]);
  const isValid = Object.keys(errors).length === 0;
  const canSubmit = isValid && status !== "submitting";

  function update<K extends FieldName>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (status === "error") setFormError(null);
    if (status === "success") setStatus("idle");
  }

  function markTouched(key: FieldName) {
    setTouched((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setTouched({ name: true, email: true, message: true });

    if (!isValid) {
      setStatus("error");
      return;
    }

    // Honeypot — silently "succeed"
    if (website.trim() !== "") {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    // Instant-submit guard
    if (Date.now() - mountedAt.current < MIN_FILL_MS) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      return;
    }

    // Per-browser throttle
    const last = Number(localStorage.getItem(THROTTLE_KEY) ?? 0);
    const wait = THROTTLE_MS - (Date.now() - last);
    if (wait > 0) {
      setStatus("error");
      setFormError(`Please wait ${Math.ceil(wait / 1000)}s before sending another message.`);
      return;
    }

    setStatus("submitting");
    const { error: dbError } = await supabase.from("contact_messages").insert(form);

    if (dbError) {
      setStatus("error");
      setFormError("Something went wrong. Please try again.");
      return;
    }

    localStorage.setItem(THROTTLE_KEY, String(Date.now()));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
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
            noValidate
            className="glass relative rounded-2xl border border-border p-6 sm:p-8"
          >
            <div className="space-y-5">
              {/* Honeypot — hidden from real users */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-10000px",
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                }}
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={(v) => update("name", v)}
                onBlur={() => markTouched("name")}
                placeholder="Ada Okonkwo"
                disabled={status === "submitting"}
                error={touched.name ? errors.name : undefined}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                onBlur={() => markTouched("email")}
                placeholder="ada@company.com"
                disabled={status === "submitting"}
                error={touched.email ? errors.email : undefined}
              />
              <TextareaField
                label="Message"
                id="message"
                value={form.message}
                onChange={(v) => update("message", v)}
                onBlur={() => markTouched("message")}
                placeholder="Tell us what you're building…"
                disabled={status === "submitting"}
                error={touched.message ? errors.message : undefined}
                maxLength={2000}
              />

              {status === "success" && (
                <StatusBox icon={<CheckCircle2 className="h-4 w-4" />} tone="success">
                  Message sent. We'll be in touch soon.
                </StatusBox>
              )}
              {status === "error" && formError && (
                <StatusBox icon={<AlertCircle className="h-4 w-4" />} tone="error">
                  {formError}
                </StatusBox>
              )}

              <button
                type="submit"
                disabled={!canSubmit}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-sunrise px-6 py-3.5 text-sm font-medium text-primary-foreground glow transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
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

type BaseFieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
};

function Field({
  label, id, value, onChange, onBlur, placeholder, type = "text", disabled, error,
}: BaseFieldProps & { type?: string }) {
  const hasError = Boolean(error);
  const describedBy = hasError ? `${id}-error` : undefined;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        aria-describedby={describedBy}
        className={`w-full rounded-xl border bg-background/40 px-4 py-3 text-sm text-ivory placeholder:text-muted-foreground/60 outline-none transition-colors ${
          hasError
            ? "border-destructive/70 focus:border-destructive"
            : "border-border focus:border-gold/60"
        }`}
      />
      <FieldError id={describedBy} message={error} />
    </div>
  );
}

function TextareaField({
  label, id, value, onChange, onBlur, placeholder, disabled, error, maxLength,
}: BaseFieldProps & { maxLength?: number }) {
  const hasError = Boolean(error);
  const describedBy = hasError ? `${id}-error` : undefined;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        disabled={disabled}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-invalid={hasError || undefined}
        aria-describedby={describedBy}
        className={`w-full resize-none rounded-xl border bg-background/40 px-4 py-3 text-sm text-ivory placeholder:text-muted-foreground/60 outline-none transition-colors ${
          hasError
            ? "border-destructive/70 focus:border-destructive"
            : "border-border focus:border-gold/60"
        }`}
      />
      <FieldError id={describedBy} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id?: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive">
      <AlertCircle className="h-3 w-3" />
      {message}
    </p>
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
