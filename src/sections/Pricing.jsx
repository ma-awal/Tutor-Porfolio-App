import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";
import { resolveHref, waLink } from "@/lib/links";

// Packages / Plans. items: [{ name, price, period, text, features: [], featured, button: { label, href } }]
export default function Pricing({ id, eyebrow, title, subtitle, items = [], contact }) {
  return (
    <section id={id} className="sec">
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mx-auto grid max-w-5xl items-stretch gap-5 md:grid-cols-3">
        {items.map((it, i) => {
          const f = it.featured;
          const href = it.button?.href === "@whatsapp"
            ? waLink(contact.whatsapp || contact.phone, `Hello, I want the ${it.name} plan.`)
            : resolveHref(it.button?.href, contact);
          return (
            <Reveal key={it.name} delay={i * 100}
              className={`relative flex flex-col rounded-theme p-7 ${f ? "grad-bg text-white shadow-soft md:-my-3 md:py-10" : "glass"}`}>
              {f && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">Most popular</span>}
              <h3 className="text-lg font-bold">{it.name}</h3>
              <p className={`mt-1 text-sm ${f ? "text-white/80" : "text-muted"}`}>{it.text}</p>
              <div className="my-6 flex items-end gap-1.5">
                <strong className="text-4xl font-extrabold tracking-tight">{it.price}</strong>
                <span className={`pb-1 text-sm ${f ? "text-white/80" : "text-muted"}`}>{it.period}</span>
              </div>
              <ul className="mb-7 grid gap-3 text-[15px]">
                {(it.features || []).map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${f ? "bg-white/25" : "bg-accent/15 text-accent"}`}><Icon name="check" className="h-3 w-3" /></span>{t}
                  </li>
                ))}
              </ul>
              <a href={href} target="_blank" rel="noreferrer" className={`btn mt-auto ${f ? "bg-white text-ink shadow-soft" : "btn-primary"}`}>{it.button?.label || "Choose plan"}</a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
