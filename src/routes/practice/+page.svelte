<script>
	import SectionRule from '$lib/components/SectionRule.svelte';
	import ImageSlot from '$lib/components/ImageSlot.svelte';

	const areas = [
		{
			title: 'Commercial Disputes',
			body: 'Business conflicts, partnership disagreements, contract disputes, shareholder issues, and corporate matters.',
			icon: 'briefcase'
		},
		{
			title: 'Construction Disputes',
			body: 'Delay claims, construction defects, payment disputes, contract interpretation, and project conflicts.',
			icon: 'crane'
		},
		{
			title: 'Employment Disputes',
			body: 'Workplace claims, wrongful termination, discrimination, wage and hour disputes, and executive matters.',
			icon: 'people'
		},
		{
			title: 'Franchise Disputes',
			body: 'Franchisor–franchisee conflicts, operations disputes, territory matters, and franchise agreement issues.',
			icon: 'store'
		},
		{
			title: 'Personal Injury',
			body: 'Complex injury matters including premises liability, motor vehicle, and general liability claims.',
			icon: 'scales'
		}
	];

	const resolutions = [
		{ value: '$4.6M', label: 'Construction Dispute' },
		{ value: '$3.0M', label: 'Commercial Settlement' },
		{ value: '$2.2M', label: 'Employment Dispute' }
	];

	const why = [
		{ title: 'Cost-Effective', body: 'Avoid significant expenses associated with prolonged litigation.', icon: 'dollar' },
		{ title: 'Time-Saving', body: 'Resolve disputes faster and move forward efficiently.', icon: 'clock' },
		{ title: 'Confidential', body: 'Discussions and details remain private.', icon: 'lock' },
		{ title: 'Collaborative', body: 'A process that allows both sides to maintain control.', icon: 'people' }
	];
</script>

<svelte:head>
	<title>Practice Areas | John F. Gelson — Mediation Services</title>
	<meta
		name="description"
		content="John F. Gelson mediates commercial, construction, employment, franchise, and personal injury disputes throughout New Jersey and New York."
	/>
</svelte:head>

{#snippet icon(name)}
	{#if name === 'briefcase'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></svg>
	{:else if name === 'crane'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M5 21h14M7 21V6l11-2M7 6h13M9 6v3M12 6v3M15 6v2"/><circle cx="11" cy="14" r="1"/></svg>
	{:else if name === 'people'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 6a3 3 0 0 1 0 6M18 20a6 6 0 0 0-3-5.2"/></svg>
	{:else if name === 'store'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 9V7l1.5-3h13L20 7v2M4 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0M5 11v9h14v-9M9 20v-5h6v5"/></svg>
	{:else if name === 'scales'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3v18M7 21h10M5 7h14M5 7 3 13h4L5 7zm14 0-2 6h4l-2-6zM3 13a2 2 0 0 0 4 0M17 13a2 2 0 0 0 4 0"/></svg>
	{:else if name === 'dollar'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6v12M15 9a3 2.4 0 0 0-3-2c-1.7 0-3 1-3 2.2 0 2.8 6 1.4 6 4.2 0 1.3-1.4 2.3-3 2.3a3 2.4 0 0 1-3-2"/></svg>
	{:else if name === 'clock'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>
	{:else if name === 'lock'}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
	{/if}
{/snippet}

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">Practice</p>
			<h1>Practice Areas</h1>
			<span class="rule"></span>
			<p class="lede">
				John mediates a wide range of commercial and civil disputes throughout New Jersey and New
				York.
			</p>
		</div>
		<div class="hero-media">
			<ImageSlot caption="Office desk, legal volumes, and notebook" ratio="5 / 4" />
		</div>
	</div>
</section>

<section class="section areas">
	<div class="container">
		<SectionRule title="Areas of Mediation" center />
		<div class="area-grid">
			{#each areas as area}
				<article class="area">
					<span class="area-icon" aria-hidden="true">{@render icon(area.icon)}</span>
					<h3>{area.title}</h3>
					<p>{area.body}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section resolutions">
	<div class="container">
		<SectionRule title="Selected Resolutions" center />
		<div class="res-grid">
			{#each resolutions as r}
				<div class="res">
					<span class="res-value">{r.value}</span>
					<span class="res-rule"></span>
					<span class="res-label">{r.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section why">
	<div class="container">
		<SectionRule title="Why Mediation" center />
		<div class="why-grid">
			{#each why as w}
				<article class="why-item">
					<span class="why-icon" aria-hidden="true">{@render icon(w.icon)}</span>
					<div>
						<h3>{w.title}</h3>
						<p>{w.body}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section-dark final">
	<div class="container">
		<h2>Experienced mediation.<br />Practical solutions.<br />Efficient outcomes.</h2>
		<span class="rule"></span>
		<p>Helping people resolve complex disputes across New Jersey and New York.</p>
	</div>
</section>

<style>
	.hero {
		background: linear-gradient(180deg, var(--off-white), var(--warm-gray));
		border-bottom: 1px solid var(--hairline);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: clamp(2rem, 5vw, 4rem);
		padding-block: clamp(3rem, 6vw, 4.5rem);
	}

	.hero-copy h1 {
		color: var(--navy);
	}

	.areas {
		background: #fff;
	}

	.area-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0;
	}

	.area {
		padding: 0.5rem clamp(1rem, 2vw, 1.75rem);
		text-align: center;
	}

	.area:not(:last-child) {
		border-right: 1px solid var(--hairline);
	}

	.area-icon {
		display: inline-flex;
		width: 40px;
		height: 40px;
		color: var(--gold);
		margin-bottom: 1rem;
	}

	.area-icon :global(svg),
	.why-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.area h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.6rem;
	}

	.area p {
		font-size: 0.9rem;
		color: var(--text-muted);
		margin: 0;
		line-height: 1.55;
	}

	.resolutions {
		background: var(--warm-gray);
	}

	.res-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(1.5rem, 3vw, 2.5rem);
		text-align: center;
	}

	.res {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.res:not(:last-child) {
		border-right: 1px solid var(--hairline);
	}

	.res-value {
		font-family: var(--font-heading);
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		font-weight: 500;
		color: var(--navy);
		line-height: 1;
	}

	.res-rule {
		width: 32px;
		height: 2px;
		background: var(--gold);
		margin: 0.85rem 0;
	}

	.res-label {
		font-size: 0.95rem;
		color: var(--text-muted);
	}

	.why {
		background: var(--off-white);
	}

	.why-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: clamp(1.5rem, 3vw, 2.25rem);
	}

	.why-item {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.why-icon {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		padding: 11px;
		border-radius: 50%;
		background: var(--navy);
		color: var(--off-white);
	}

	.why-item h3 {
		font-size: 1.05rem;
		font-weight: 600;
		margin-bottom: 0.4rem;
	}

	.why-item p {
		font-size: 0.9rem;
		color: var(--text-muted);
		margin: 0;
		line-height: 1.55;
	}

	.final {
		padding-block: clamp(4rem, 8vw, 6.5rem);
	}

	.final h2 {
		color: var(--text-on-dark);
		font-size: clamp(1.9rem, 4vw, 2.85rem);
	}

	.final .rule {
		margin: 1.5rem 0;
	}

	.final p {
		color: var(--text-on-dark-muted);
		margin: 0;
		max-width: 40ch;
	}

	@media (max-width: 900px) {
		.area-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem 0;
		}
		.area:nth-child(odd) {
			border-right: 1px solid var(--hairline);
		}
		.area:nth-child(even) {
			border-right: 0;
		}
		.why-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 860px) {
		.hero-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 600px) {
		.res-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.res:not(:last-child) {
			border-right: 0;
			border-bottom: 1px solid var(--hairline);
			padding-bottom: 2rem;
		}
		.area-grid {
			grid-template-columns: 1fr;
		}
		.area {
			border-right: 0 !important;
			padding-block: 1.5rem;
			border-bottom: 1px solid var(--hairline);
		}
		.area:last-child {
			border-bottom: 0;
		}
		.why-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
