export default function Avatar({ photo, name, textClass = "text-[96px]" }) {
  if (photo) return <img className="h-full w-full object-cover" src={photo} alt={name} loading="lazy" />;
  const initials = name.replace(/^(Dr|Eng|Adv|Prof|Md|Mr|Mrs|Ms)\.?\s+/i, "").split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return <div className={`grad-text font-extrabold ${textClass}`}>{initials}</div>;
}
