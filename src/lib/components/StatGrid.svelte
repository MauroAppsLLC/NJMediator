<script>
	let { items = [], divided = true } = $props();
</script>

<div class="stats" class:divided style="--cols: {items.length}">
	{#each items as item}
		<div class="stat">
			<span class="value">{item.value}</span>
			<span class="label">{item.label}</span>
			{#if item.sub}<span class="sub">{item.sub}</span>{/if}
		</div>
	{/each}
</div>

<style>
	.stats {
		display: grid;
		grid-template-columns: repeat(var(--cols, 4), 1fr);
		gap: clamp(1.5rem, 3vw, 2.5rem);
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding-inline: 1rem;
	}

	.divided .stat:not(:last-child) {
		border-right: 1px solid var(--hairline);
	}

	.value {
		font-family: var(--font-heading);
		font-size: clamp(2.4rem, 4vw, 3.25rem);
		font-weight: 500;
		color: var(--navy);
		line-height: 1;
		font-variant-numeric: lining-nums tabular-nums;
		font-feature-settings: 'lnum' 1, 'tnum' 1;
		letter-spacing: -0.01em;
	}

	.label {
		margin-top: 0.7rem;
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-muted);
	}

	.sub {
		margin-top: 0.2rem;
		font-size: 0.75rem;
		letter-spacing: 0.06em;
		color: var(--text-muted);
	}

	@media (max-width: 760px) {
		.stats {
			grid-template-columns: repeat(2, 1fr);
			gap: 2.25rem 1rem;
		}
		.divided .stat:nth-child(odd) {
			border-right: 1px solid var(--hairline);
		}
		.divided .stat:nth-child(even) {
			border-right: 0;
		}
	}
</style>
