import Reveal from "@/components/Reveal";
import Avatar from "@/components/Avatar";
import Icon from "@/components/Icon";
import { resolveHref, isExternal } from "@/lib/links";

// Tutor hero: gol portrait (photo support) + subject bubbles. Self-contained, onno kono hero ke chhoy na.
const POS = ["left-[2%] top-[12%]", "right-[0%] top-[22%]", "left-[0%] bottom-[20%]", "right-[6%] bottom-[5%]"];

export default function HeroOrbit({ id = "home", badge, headline, highlight, subtitle, photo, ctas = [], trust = [], subjects = [], brand, contact }) {
  const parts = highlight && headline.includes(highlight) ? headline.split(highlight) : [headline];
  return (
    <section id={id} className="wrap grid min-h-screen items-center gap-12 pb-12 pt-32 lg:grid-cols-[1.1fr_.9fr] [&>*]:min-w-0">
      <div>
        {badge && (
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-[13px] font-semibold text-accent">
              <i className="h-2 w-2 animate-ring rounded-full bg-accent" />{badge}
            </span>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="my-5 text-[clamp(34px,5vw,58px)] font-extrabold leading-[1.1] tracking-tight">
            {parts[0]}{parts.length > 1 && <span className="grad-text">{highlight}</span>}{parts[1]}
          </h1>
        </Reveal>
        <Reveal delay={160}><p className="max-w-[520px] text-lg text-muted">{subtitle}</p></Reveal>
        <Reveal delay={240} className="mt-8 flex flex-wrap gap-3.5">
          {ctas.map((c) => (
            <a key={c.label} className={`btn ${c.variant === "ghost" ? "btn-ghost" : "btn-primary"}`} href={resolveHref(c.href, contact)}
               {...(isExternal(c.href) ? { target: "_blank", rel: "noreferrer" } : {})}>
              {c.icon && <Icon name={c.icon} className="h-[18px] w-[18px]" />}{c.label}
            </a>
          ))}
        </Reveal>
        {trust.length > 0 && (
          <Reveal delay={320} className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {trust.map((t) => (
              <div key={t.text} className="flex items-center gap-2 text-sm font-semibold text-muted">
                <Icon name={t.icon} className="h-[18px] w-[18px] text-accent" />{t.text}
              </div>
            ))}
          </Reveal>
        )}
      </div>

      <Reveal delay={200} className="relative mx-auto grid aspect-square w-full max-w-[430px] place-items-center">
        <div className="grad-bg absolute inset-[14%] rounded-full opacity-25 blur-2xl" />
        <div className="absolute inset-3 rounded-full border-2 border-dashed border-accent/30" />
        <div className="absolute inset-[9%] rounded-full border border-accent/15" />
        <div className="relative grid h-[60%] w-[60%] place-items-center overflow-hidden rounded-full border-4 border-white/90 bg-gradient-to-br from-accent/15 to-accent2/30 shadow-soft">
          <Avatar photo={photo} name={brand.name} textClass="text-7xl" />
        </div>
        {subjects.slice(0, 4).map((s, i) => (
          <div key={s.label} style={{ animationDelay: `${-i * 1.5}s` }}
               className={`glass absolute flex animate-bob items-center gap-2.5 rounded-full py-2 pl-2 pr-4 text-sm font-bold ${POS[i]}`}>
            <span className="grad-bg grid h-9 w-9 place-items-center rounded-full text-white"><Icon name={s.icon} className="h-[18px] w-[18px]" /></span>{s.label}
          </div>
        ))}
      </Reveal>
    </section>
  );
}
