<script>
	let { items = [], columns = 4, boxed = false, dark = false } = $props();
</script>

<div class="grid" class:boxed class:dark style="--cols: {columns}">
	{#each items as item}
		<article class="cell">
			{#if item.icon}<span class="icon" aria-hidden="true">{@html item.icon}</span>{/if}
			<h3>{item.title}</h3>
			<p>{item.body}</p>
		</article>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--cols, 4), 1fr);
		gap: clamp(1.25rem, 2.5vw, 2rem);
	}

	.cell {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.boxed .cell {
		position: relative;
		background: #fff;
		border: 1px solid var(--hairline);
		border-radius: var(--radius);
		padding: clamp(1.5rem, 2.5vw, 2rem);
		overflow: hidden;
		transition:
			transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}

	.boxed .cell::before {
		content: '';
		position: absolute;
		inset: 0 auto auto 0;
		width: 100%;
		height: 2px;
		background: var(--gold);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.boxed .cell:hover {
		transform: translateY(-4px);
		border-color: transparent;
		box-shadow: 0 18px 40px -22px rgba(31, 36, 48, 0.35);
	}

	.boxed .cell:hover::before {
		transform: scaleX(1);
	}

	.dark.boxed .cell {
		background: rgba(255, 255, 255, 0.04);
		border-color: var(--hairline-dark);
	}

	.icon {
		display: inline-flex;
		width: 38px;
		height: 38px;
		color: var(--gold);
		margin-bottom: 0.35rem;
	}

	.icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	h3 {
		font-size: 1.2rem;
		font-weight: 500;
	}

	.dark h3 {
		color: var(--text-on-dark);
	}

	.cell p {
		margin: 0;
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.6;
	}

	.dark .cell p {
		color: var(--text-on-dark-muted);
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
