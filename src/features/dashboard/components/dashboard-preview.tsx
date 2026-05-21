export function DashboardPreview() {
  return (
    <article className="min-h-0 flex-1 overflow-hidden p-3 sm:p-4">
      <section
        aria-label="Dashboard content preview"
        className="rounded-xl border border-zinc-200 bg-white p-5"
      >
        <header className="mb-6 h-6 w-44 rounded bg-zinc-200" />
        <section className="space-y-3">
          <p className="h-4 w-full rounded bg-zinc-100" />
          <p className="h-4 w-[88%] rounded bg-zinc-100" />
          <p className="h-4 w-[72%] rounded bg-zinc-100" />
        </section>
      </section>
    </article>
  )
}
