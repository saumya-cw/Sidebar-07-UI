export function DashboardPreview() {
	return (
		<article className="min-h-0 flex-1 overflow-hidden p-3 sm:p-4">
			<section
				aria-label="Dashboard content preview"
				className="rounded-xl border border-border bg-background p-5"
			>
				<header className="mb-6 h-6 w-44 rounded bg-muted-foreground/15" />
				<section className="space-y-3">
					<p className="h-4 w-full rounded bg-muted" />
					<p className="h-4 w-[88%] rounded bg-muted" />
					<p className="h-4 w-[72%] rounded bg-muted" />
				</section>
			</section>
		</article>
	);
}
