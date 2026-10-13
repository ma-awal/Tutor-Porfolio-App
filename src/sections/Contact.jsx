"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Heading from "@/components/Heading";
import Icon from "@/components/Icon";
import { waLink } from "@/lib/links";

const field = "w-full resize-y rounded-theme-sm border border-ink/10 bg-white/75 px-[18px] py-[15px] text-[15px] font-medium text-ink outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15";

// Backend lage na: submit korle WhatsApp e message open hobe
function Form({ contact, buttonLabel, className = "" }) {
  const [f, setF] = useState({ name: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    window.open(waLink(contact.whatsapp || contact.phone, `Hello, I'm ${f.name || "a visitor"}.\n${f.message}`), "_blank");
  };
  return (
    <Reveal as="form" delay={120} onSubmit={submit} className={`glass grid gap-3.5 rounded-theme p-6 md:p-7 ${className}`}>
      <input className={field} required placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
      <textarea className={field} required rows={4} placeholder="Your message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
      <button className="btn btn-primary" type="submit"><Icon name="send" className="h-[18px] w-[18px]" />{buttonLabel}</button>
    </Reveal>
  );
}
const getRows = (c) => [
  c.phone && { icon: "phone", label: "Phone", value: `+${c.phone}`, href: `tel:+${c.phone}` },
  c.email && { icon: "mail", label: "Email", value: c.email, href: `mailto:${c.email}` },
  c.address && { icon: "map-pin", label: "Address", value: c.address },
].filter(Boolean);
const InfoCard = ({ r, i }) => (
  <Reveal delay={i * 80} className={`glass flex items-center gap-4 rounded-theme-sm px-5 py-4`}>
    <span className="grad-bg grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white"><Icon name={r.icon} className="h-5 w-5" /></span>
    <div className="min-w-0"><small className="block text-xs font-semibold uppercase tracking-wider text-muted">{r.label}</small>
      {r.href ? <a className="break-words text-[15px] font-semibold" href={r.href}>{r.value}</a> : <p className="text-[15px] font-semibold">{r.value}</p>}</div>
  </Reveal>
);

export default function Contact({ id, eyebrow, title, subtitle, buttonLabel = "Send on WhatsApp", contact }) {
  const rows = getRows(contact);
  return (
    <section id={id} className="sec">
      <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mx-auto grid max-w-[980px] gap-6 md:grid-cols-[1fr_1.1fr]">
        <div className="grid content-start gap-4">{rows.map((r, i) => <InfoCard key={r.label} r={r} i={i} />)}</div>
        <Form contact={contact} buttonLabel={buttonLabel} />
      </div>
    </section>
  );
}
