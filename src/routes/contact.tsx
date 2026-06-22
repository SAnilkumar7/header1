import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, SectionHeading } from "../components/Reveal";
import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DEVANAMPRIYA" },
      { name: "description", content: "Reach out to DEVANAMPRIYA. Volunteer, donate, or simply say hello." },
      { property: "og:title", content: "Contact DEVANAMPRIYA" },
      { property: "og:description", content: "Volunteer, donate or get in touch." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const FAQS = [
  { q: "How can I volunteer with Devanampriya?", a: "Fill the volunteer registration form below — our coordinator will reach out within 48 hours to match you with a programme that fits your time and skills." },
  { q: "Are donations tax-deductible?", a: "Yes. All donations are eligible for 80G tax exemption under Indian law. A receipt is shared within 7 working days." },
  { q: "Do I need prior knowledge of Buddhism?", a: "Not at all. Our work is rooted in universal values — compassion, equality and service. Everyone is welcome." },
  { q: "Can my organisation partner with you?", a: "Absolutely. Write to partnerships@devanampriya.org with a brief about your work and proposed collaboration." },
];

function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="bg-[var(--royal-deep)] pt-32 pb-16 text-white">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl md:text-6xl">Let's walk the <span className="text-gradient-gold">path</span> together.</h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">Volunteer, donate, partner, or simply share a thought — we'd love to hear from you.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <h3 className="text-2xl font-semibold">Reach us</h3>
            <p className="mt-2 text-muted-foreground">Our doors and inboxes are always open.</p>
            <ul className="mt-8 space-y-5 text-sm">
              {[
                { I: MapPin, t: "Address", d: "#4-6-01(Shop No-2) Shashi Mahal Talkies Road, Manglwar Pet. Near Reddy floar mill Raichur-584101" },
                { I: Phone, t: "Phone", d: "+91 70194 28321,+91 99866 22479,+91 99457 99308,+91 94480 25091" },
                { I: Mail, t: "Email", d: "connect@devanampriya.org" },
              ].map(({ I, t, d }) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--royal)]"><I className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t}</div>
                    <div className="mt-1 font-medium">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.393822897374!2d77.35608907301545!3d16.200181035923162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9d79e2bbfec67%3A0xe98289439bbd2a80!2sShashi%20Mahal%20Talkies%20Rd%2C%20Raichur%2C%20Karnataka%20584101!5e0!3m2!1sen!2sin!4v1782150917837!5m2!1sen!2sin"
                className="h-64 w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
              <h3 className="text-2xl font-semibold">Volunteer & Contact Form</h3>
              <p className="mt-1 text-sm text-muted-foreground">We'll respond within 48 hours.</p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <Field label="City" name="city" />
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">I'd like to</label>
                  <select name="intent" className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-[var(--gold)] focus:outline-none">
                    <option>Volunteer with a programme</option>
                    <option>Make a donation</option>
                    <option>Partner with Devanampriya</option>
                    <option>Just say hello</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Message</label>
                  <textarea name="message" rows={5} required className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-[var(--gold)] focus:outline-none" placeholder="Tell us a little about yourself…" />
                </div>
              </div>
              <button type="submit" className="btn-primary mt-8"><Send className="h-4 w-4" /> {sent ? "Thank you — received!" : "Send Message"}</button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-page max-w-4xl">
          <Reveal><SectionHeading center eyebrow="FAQ" title="Questions, kindly answered." /></Reveal>
          <div className="mt-12 space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 0.05}>
                  <div className="overflow-hidden rounded-xl border border-border bg-card">
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                      <span className="font-semibold">{f.q}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--gold)] transition ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                          <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-[var(--gold)] focus:outline-none" />
    </div>
  );
}
