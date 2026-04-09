export function SectionHeading({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-brand-ink md:text-6xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-brand-muted md:text-lg">{body}</p> : null}
    </div>
  );
}
