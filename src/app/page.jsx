import data from "@/data/tutor";
import { themeVars } from "@/lib/theme";
import { registry } from "@/sections/registry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
  title: data.meta.title,
  description: data.meta.description,
  openGraph: { title: data.meta.title, description: data.meta.description, type: "website" },
};

export default function Home() {
  return (
    <div style={themeVars(data.theme, data.ui)} data-pattern={data.ui.pattern} data-eyebrow={data.ui.eyebrow} data-align={data.ui.align} data-font={data.ui.font}>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <i className="absolute -left-24 -top-32 h-[480px] w-[480px] animate-float rounded-full bg-accent/35 blur-[90px]" />
        <i className="absolute -right-32 top-1/3 h-[420px] w-[420px] animate-float rounded-full bg-accent2/35 blur-[90px] [animation-delay:-6s]" />
        <i className="absolute -bottom-24 left-1/3 h-[360px] w-[360px] animate-float rounded-full bg-accent/25 blur-[90px] [animation-delay:-12s]" />
      </div>

      <div className="pattern" aria-hidden="true" />
      <Navbar brand={data.brand} sections={data.sections} contact={data.contact} />
      <main>
        {data.sections.map((s, i) => {
          const Section = registry[s.type];
          return Section ? <Section key={s.id || i} {...s} brand={data.brand} contact={data.contact} /> : null;
        })}
      </main>
      <Footer brand={data.brand} contact={data.contact} />
      <FloatingContact contact={data.contact} />
    </div>
  );
}
