export function DashboardPreview() {
	return (
		<article className="min-h-0 flex-1 overflow-hidden p-3 sm:p-4">
			<section
				aria-label="Dashboard content preview"
				className="rounded-xl border border-border bg-background p-5"
			>
				<span
					aria-hidden="true"
					className="mb-6 block h-6 w-44 rounded bg-muted-foreground/15"
				/>
				<section className="space-y-3">
					<span
						aria-hidden="true"
						className="block h-4 w-full rounded bg-muted"
					/>
					<span
						aria-hidden="true"
						className="block h-4 w-11/12 rounded bg-muted"
					/>
					<span
						aria-hidden="true"
						className="block h-4 w-3/4 rounded bg-muted"
					/>
				</section>
			</section>
		</article>
	);
}
