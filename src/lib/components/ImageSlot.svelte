<script>
	// Reusable image placeholder. When `src` is provided it renders the real
	// photo; otherwise it shows a clearly-marked slot to swap in later.
	let {
		src = '',
		alt = '',
		caption = 'Image',
		ratio = '4 / 3',
		fit = 'cover',
		position = 'center',
		rounded = true
	} = $props();
</script>

{#if src}
	<figure class="frame" class:rounded style="aspect-ratio: {ratio}">
		<img {src} {alt} style="object-fit: {fit}; object-position: {position};" loading="lazy" />
	</figure>
{:else}
	<div class="frame placeholder" class:rounded style="aspect-ratio: {ratio}" role="img" aria-label="{caption} (placeholder)">
		<span class="badge">Image slot</span>
		<span class="cap">{caption}</span>
	</div>
{/if}

<style>
	.frame {
		width: 100%;
		overflow: hidden;
		background: var(--warm-gray);
	}

	.rounded {
		border-radius: var(--radius);
	}

	.frame img {
		width: 100%;
		height: 100%;
	}

	.placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		text-align: center;
		padding: 1.5rem;
		background:
			repeating-linear-gradient(
				45deg,
				rgba(31, 36, 48, 0.025),
				rgba(31, 36, 48, 0.025) 12px,
				transparent 12px,
				transparent 24px
			),
			var(--warm-gray);
		border: 1px dashed rgba(31, 36, 48, 0.18);
	}

	.badge {
		font-size: 0.65rem;
		font-weight: 600;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--gold);
	}

	.cap {
		font-family: var(--font-heading);
		font-style: italic;
		font-size: 1.05rem;
		color: var(--text-muted);
		max-width: 32ch;
	}
</style>
