import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";

/* ---------- shared pieces ---------- */
const Paras = ({ text = [] }) => text.map((p, i) => <Reveal key={i} as="p" delay={i * 80} className="mb-3.5 text-muted">{p}</Reveal>);
const Tags = ({ tags = [], mono }) => tags.length > 0 && (
  <Reveal className="mt-5 flex flex-wrap gap-2.5">
    {tags.map((t) => <span key={t} className={`bg-accent/10 px-4 py-1.5 text-[13.5px] font-semibold text-accent ${mono ? "rounded-md font-mono" : "rounded-full"}`}>{t}</span>)}
  </Reveal>
);

/* ---------- facts (student): bio + quick facts card ---------- */
export default function About(p) {
  return (
    <section id={p.id} className="sec">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal className="glass rounded-theme p-7 md:p-9">
          <Heading align="left" eyebrow={p.eyebrow} title={p.title} />
          <Paras text={p.text} /><Tags tags={p.tags} />
        </Reveal>
        <div className="grid gap-4">
          <Reveal delay={100} className="glass rounded-theme p-6">
            <h3 className="mb-4 text-lg font-bold">Quick facts</h3>
            <div className="grid gap-3.5">
              {(p.facts || []).map((f) => (
                <div key={f.label} className="flex items-center gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Icon name={f.icon} className="h-[18px] w-[18px]" /></span>
                  <div className="leading-tight"><small className="text-xs font-semibold uppercase tracking-wider text-muted">{f.label}</small><b className="block text-[15px]">{f.value}</b></div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="grid grid-cols-3 gap-3">
            {(p.stats || []).map((s, i) => (
              <Reveal key={s.label} delay={150 + i * 80} className="glass rounded-theme-sm p-4 text-center"><strong className="grad-text block text-2xl font-extrabold">{s.value}</strong><span className="text-xs font-medium text-muted">{s.label}</span></Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
