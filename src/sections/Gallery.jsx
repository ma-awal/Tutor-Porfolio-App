import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";

// Photo gallery (6 ta item best). image khali thakle sundor placeholder dekhay.
// items: [{ image: "/images/class1.jpg", title: "Classroom", text: "optional", icon: "book-open" }]
const SPAN = ["col-span-2 row-span-2", "", "", "col-span-2", "md:col-span-2", "md:col-span-2"];

export default function Gallery({ id, eyebrow, title, subtitle, items = [] }) {
  return (
    <section id={id} className="sec">
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="grid auto-rows-[150px] grid-cols-2 gap-3.5 md:auto-rows-[190px] md:grid-cols-4 md:gap-4">
        {items.slice(0, 6).map((it, i) => (
          <Reveal key={it.title + i} delay={(i % 3) * 80}
            className={`group relative overflow-hidden rounded-theme border border-white/80 shadow-soft ${SPAN[i] || ""}`}>
            {it.image ? (
              <img src={it.image} alt={it.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            ) : (
              <div className="relative grid h-full w-full place-items-center overflow-hidden bg-gradient-to-br from-accent/15 to-accent2/30">
                <i className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/40" />
                <i className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-accent/10" />
                <Icon name={it.icon || "sparkles"} className="relative h-12 w-12 text-accent/50 md:h-14 md:w-14" />
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/30 to-transparent p-4 pt-12 text-white">
              <b className="block text-sm md:text-base">{it.title}</b>
              {it.text && <span className="text-xs text-white/80">{it.text}</span>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
