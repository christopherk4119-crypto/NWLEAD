"use client";
import { useEffect, useRef, useState } from "react";
import { Clock, Mail, MapPin, MessageSquare, Phone, AlertTriangle, CheckCircle2 } from "lucide-react";
import { formServiceOptions, site } from "@/lib/site";

// REPLACE WITH YOUR FORM ENDPOINT
// e.g. set NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx in Vercel → Settings → Environment Variables
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

const whenOptions = ["Urgent", "Next few days", "Next few weeks", "Just getting a quote"];
type Errors = Partial<Record<"name" | "phone" | "email", string>>;

export default function ContactForm() {
  const [service, setService] = useState("");
  const [when, setWhen] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [firstName, setFirstName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const onPrefill = (e: Event) => setService((e as CustomEvent<string>).detail);
    window.addEventListener("prefill-service", onPrefill);
    return () => window.removeEventListener("prefill-service", onPrefill);
  }, []);

  function validate(fd: FormData): Errors {
    const e: Errors = {};
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").replace(/\D/g, "");
    const email = String(fd.get("email") || "").trim();
    if (!name) e.name = "What should we call you?";
    if (phone.length < 10) e.phone = "Please add a 10-digit phone number so Cam can call you back.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "That email doesn't look quite right.";
    return e;
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      (ev.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setFirstName(String(fd.get("name")).trim().split(" ")[0]);
    if (!FORM_ENDPOINT) {
      console.warn("Form endpoint not set. See README → Form endpoint.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: fd });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      formRef.current?.reset();
      setService("");
      setWhen("");
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Errors) =>
    errors[k] ? <p id={`${k}-error`} className="mt-1.5 text-sm font-medium text-red-700">{errors[k]}</p> : null;

  return (
    <section id="contact" className="section bg-pine">
      <div className="container-x grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="eyebrow !text-amber">Free estimates</span>
          <h2 className="h2 !text-white">Book your free estimate</h2>
          <p className="mt-4 text-lg text-white/85">Tell us what&apos;s on the list. Cam will get back to you to book a time that suits you.</p>

          <div className="mt-8 space-y-5 text-white">
            <a href={site.phoneHref} className="flex items-center gap-3 font-display text-4xl font-bold hover:text-amber">
              <Phone className="h-8 w-8 text-amber" aria-hidden="true" />{site.phoneDisplay}
            </a>
            <a href={site.smsHref} className="flex items-center gap-3 hover:text-amber"><MessageSquare className="h-5 w-5 text-amber" aria-hidden="true" />Call or text, whichever is easier</a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-amber"><Mail className="h-5 w-5 shrink-0 text-amber" aria-hidden="true" />{site.email}</a>
            {/* CONFIRM WITH CLIENT: full hours */}
            <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-amber" aria-hidden="true" />{site.hoursDetail}</p>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber" aria-hidden="true" />Based in {site.homeBase}, serving all of Calgary</p>
          </div>
        </div>

        <div className="lg:col-span-3">
          {status === "sent" ? (
            <div role="status" className="card flex flex-col items-start gap-3 p-8">
              <CheckCircle2 className="h-12 w-12 text-pine" aria-hidden="true" />
              <h3 className="font-display text-3xl font-bold uppercase">Thanks{firstName ? `, ${firstName}` : ""}! Got it.</h3>
              <p className="text-lg">Cam will be in touch soon to talk about your job. Need him sooner? Call or text <a className="font-semibold text-pine underline" href={site.phoneHref}>{site.phoneDisplay}</a>.</p>
            </div>
          ) : (
            <form ref={formRef} noValidate onSubmit={onSubmit} className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="label">Name *</label>
                <input id="name" name="name" autoComplete="name" className="input" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                {err("name")}
              </div>
              <div>
                <label htmlFor="phone" className="label">Phone *</label>
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="403-555-1234" className="input" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
                {err("phone")}
              </div>
              <div>
                <label htmlFor="email" className="label">Email</label>
                <input id="email" name="email" type="email" inputMode="email" autoComplete="email" className="input" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                {err("email")}
              </div>

              <fieldset className="sm:col-span-2">
                <legend className="label">Property type</legend>
                <div className="grid grid-cols-2 gap-3">
                  {["Residential", "Commercial"].map((p) => (
                    <label key={p} className="flex min-h-[48px] cursor-pointer items-center justify-center rounded-[10px] border border-slate/30 px-4 font-semibold text-ink has-[:checked]:border-pine has-[:checked]:bg-pine has-[:checked]:text-white has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-amber/60">
                      <input type="radio" name="propertyType" value={p} className="sr-only" defaultChecked={p === "Residential"} />{p}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="service" className="label">Service needed</label>
                <select id="service" name="service" className="input" value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="">Choose a service</option>
                  {formServiceOptions.map((o) => (<option key={o} value={o}>{o}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="when" className="label">When do you need it?</label>
                <select id="when" name="when" className="input" value={when} onChange={(e) => setWhen(e.target.value)}>
                  <option value="">Choose one</option>
                  {whenOptions.map((o) => (<option key={o} value={o}>{o}</option>))}
                </select>
              </div>

              {when === "Urgent" && (
                <div role="alert" className="flex flex-col gap-3 rounded-card border-2 border-amber bg-amber-soft p-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-2 font-semibold text-ink"><AlertTriangle className="h-5 w-5 shrink-0 text-amber-deep" aria-hidden="true" />Urgent? Calling or texting is fastest.</p>
                  <a href={site.phoneHref} className="btn-primary shrink-0"><Phone className="h-5 w-5" aria-hidden="true" />Call {site.phoneDisplay}</a>
                </div>
              )}

              <div className="sm:col-span-2">
                <label htmlFor="area" className="label">Neighbourhood or city</label>
                <input id="area" name="area" autoComplete="address-level2" placeholder="e.g. Arbour Lake, Calgary" className="input" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="label">What needs doing?</label>
                <textarea id="message" name="message" rows={4} className="input" placeholder="A hole in the drywall, a deck to repair, a few things on the list..." />
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-[10px] bg-red-50 p-3 text-sm font-medium text-red-800 sm:col-span-2">
                  Sorry, that didn&apos;t send. Please call or text <a className="underline" href={site.phoneHref}>{site.phoneDisplay}</a> and Cam will sort you out.
                </p>
              )}

              <button type="submit" disabled={status === "sending"} className="btn-primary text-lg sm:col-span-2">
                {status === "sending" ? "Sending..." : "Request My Free Estimate"}
              </button>
              <p className="text-center text-sm sm:col-span-2">No address needed. We&apos;ll sort the details when we call.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
