import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";

const Wrap = ({ p, children }) => (
  <section id={p.id} className="sec"><Heading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />{children}</section>
);
const hover = "transition duration-300 hover:-translate-y-1.5 hover:bg-white/85 hover:shadow-[0_28px_60px_-22px_rgb(var(--accent)/.45)]";

/* badges (student achievements): centered compact cards */
export default function CardGrid(p) {
  return (
    <Wrap p={p}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {p.items.map((it, i) => (
          <Reveal key={it.title} delay={i * 80} className={`glass rounded-theme p-6 text-center ${hover}`}>
            <div className="grad-bg mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full text-white ring-8 ring-accent/10"><Icon name={it.icon} className="h-7 w-7" /></div>
            <h3 className="font-bold leading-snug">{it.title}</h3>
            <p className="mt-1.5 text-sm text-muted">{it.text}</p>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}
