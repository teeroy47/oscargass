export function ContactForm() {
  return (
    <form className="rounded-4xl border border-brand-line bg-white p-6 shadow-premium md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-2xl border border-brand-line px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
          type="text"
          placeholder="Full name"
        />
        <input
          className="rounded-2xl border border-brand-line px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
          type="email"
          placeholder="Email address"
        />
      </div>
      <input
        className="mt-4 w-full rounded-2xl border border-brand-line px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
        type="tel"
        placeholder="Phone number"
      />
      <textarea
        className="mt-4 min-h-32 w-full rounded-2xl border border-brand-line px-4 py-3 text-sm outline-none transition focus:border-brand-blue"
        placeholder="Tell us what you need"
      />
      <button type="submit" className="mt-5 rounded-full bg-brand-red px-6 py-3.5 text-sm font-semibold text-white">
        Submit Request
      </button>
    </form>
  );
}
