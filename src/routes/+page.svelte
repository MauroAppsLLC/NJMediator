<script>
	import { base } from '$app/paths';
	import StatGrid from '$lib/components/StatGrid.svelte';
	import FeatureGrid from '$lib/components/FeatureGrid.svelte';
	import SectionRule from '$lib/components/SectionRule.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const stats = [
		{ value: '30+', label: 'Years Experience' },
		{ value: '1000+', label: 'Disputes Mediated' },
		{ value: '800+', label: 'Disputes Resolved' },
		{ value: '1995', label: 'Court-Appointed', sub: 'Since 1995' }
	];

	const advantages = [
		{
			title: 'Cost-Effective',
			body: 'Avoid significant expenses associated with prolonged litigation.'
		},
		{
			title: 'Time-Saving',
			body: 'Resolve disputes faster and move forward efficiently.'
		},
		{
			title: 'Confidential',
			body: 'Discussions and details remain private.'
		},
		{
			title: 'Collaborative',
			body: 'A process that allows both sides to maintain control.'
		}
	];
</script>

<svelte:head>
	<title>John F. Gelson | Mediator, Business Counsel & Trial Attorney — NJ & NY</title>
	<meta
		name="description"
		content="John F. Gelson resolves complex disputes across the United States with experience, credibility, and a style that puts people at ease. Court-appointed mediator since 1995."
	/>
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<h1>The mediator everyone<br />wants in the room.</h1>
			<span class="rule"></span>
			<p class="hero-sub">
				Resolving complex disputes with experience, credibility, and a style that puts people at
				ease.
			</p>
			<p class="trust">
				Serving Across the United States &nbsp;|&nbsp; 30+ Years of Experience &nbsp;|&nbsp;
				Court-Appointed Since 1995
			</p>
			<div class="hero-actions">
				<a class="btn" href="/contact">Schedule a Consultation</a>
				<a class="btn btn--ghost-dark" href="/about">About John</a>
			</div>
		</div>
		<div class="hero-img-wrap">
			<img
				src="{base}/images/hero-seated.jpeg"
				alt="Seated portrait of John F. Gelson"
				width="807"
				height="666"
			/>
		</div>
	</div>
</section>

<section class="section stats-section" use:reveal>
	<div class="container">
		<SectionRule eyebrow="Why Clients Choose John" title="A trusted mediator serving across the United States" center />
		<StatGrid items={stats} />
	</div>
</section>

<section class="section press" use:reveal>
	<div class="container press-inner">
		<p class="eyebrow">Headline</p>
		<h2 class="press-title">
		<a
			href="{base}/NJ-Mediator-Article.pdf"
			target="_blank"
			rel="noreferrer"
		>
				GC Returns to Mediation Roots After $8B Blackstone Sale
				<svg class="link-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 15 15 5M15 5H7M15 5v8"/></svg>
			</a>
		</h2>
		<span class="rule rule--center"></span>
	</div>
</section>

<section class="section litigation" use:reveal>
	<div class="container">
		<SectionRule title="Mediation Over Litigation" center />
		<FeatureGrid items={advantages} columns={4} boxed />
	</div>
</section>

<section class="section section-dark closing" use:reveal>
	<div class="container container--narrow">
		<h2>Experienced mediator. Practical solutions. Efficient outcomes.</h2>
		<span class="rule rule--center"></span>
		<p>Helping people resolve complex disputes across the United States.</p>
		<a class="btn btn--on-dark" href="/contact">Schedule a Consultation</a>
	</div>
</section>

<style>
	.hero {
		--hero-surface: #f8f7f4;

		overflow: hidden;
		border-bottom: 1px solid var(--hairline);
		background:
			radial-gradient(
				ellipse at 68% 38%,
				rgba(255, 255, 255, 0.76) 0%,
				rgba(255, 255, 255, 0.34) 30%,
				rgba(248, 247, 244, 0) 62%
			),
			radial-gradient(
				ellipse at 72% 58%,
				rgba(28, 46, 74, 0.045) 0%,
				rgba(28, 46, 74, 0) 56%
			),
			var(--hero-surface);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 0.82fr) minmax(440px, 1.18fr);
		align-items: center;
		gap: clamp(1.75rem, 4vw, 4rem);
		min-height: clamp(480px, 62vh, 600px);
	}

	.hero-copy {
		position: relative;
		z-index: 2;
		align-self: center;
		max-width: 480px;
		padding-block: clamp(2.5rem, 4.5vw, 4rem);
	}

	.hero-img-wrap {
		position: relative;
		z-index: 1;
		align-self: center;
		max-width: min(100%, 600px);
		margin-inline: auto;
		margin-bottom: 16px;
	}

	/* Offset gold outline frame peeking bottom-right */
	.hero-img-wrap::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 0;
		transform: translate(16px, 16px);
		border: 1.5px solid var(--gold);
		border-radius: var(--radius);
		pointer-events: none;
	}

	.hero-img-wrap img {
		position: relative;
		z-index: 1;
		width: 100%;
		height: auto;
		display: block;
		border-radius: var(--radius);
		box-shadow: 0 26px 52px -30px rgba(31, 36, 48, 0.55);
		transition:
			transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 0.45s ease;
	}

	.hero-img-wrap:hover img {
		transform: translate(-4px, -4px);
		box-shadow: 0 34px 64px -30px rgba(31, 36, 48, 0.6);
	}

	@keyframes hero-rise {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	.hero-copy {
		animation: hero-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	.hero-img-wrap {
		animation: hero-rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both;
	}

	.hero-copy h1 {
		font-size: clamp(2rem, 3.4vw, 2.85rem);
		color: var(--charcoal);
	}

	.hero-sub {
		font-size: clamp(1.05rem, 1.6vw, 1.25rem);
		color: var(--charcoal);
		max-width: 34ch;
		margin-bottom: 1.35rem;
	}

	.trust {
		font-size: 0.78rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--navy);
		max-width: 47ch;
		margin-bottom: 2.15rem;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.9rem;
	}

	.btn--ghost-dark {
		background: transparent;
		color: var(--navy);
		border-color: var(--navy);
	}

	.btn--ghost-dark:hover {
		background: var(--navy);
		color: var(--text-on-dark);
	}

	.stats-section {
		background: #fff;
		border-bottom: 1px solid var(--hairline);
	}

	.press {
		background: var(--warm-gray);
		border-bottom: 1px solid var(--hairline);
	}

	.press-inner {
		text-align: center;
	}

	.press-title {
		max-width: 28ch;
		margin-inline: auto;
	}

	.press-title a {
		transition: color 0.2s ease;
	}

	.press-title a:hover {
		color: var(--gold);
	}

	.link-arrow {
		display: inline-block;
		width: 0.65em;
		height: 0.65em;
		margin-left: 0.3em;
		vertical-align: 0.15em;
		transition: transform 0.2s ease;
	}

	.press-title a:hover .link-arrow {
		transform: translate(2px, -2px);
	}

	.litigation {
		background: var(--off-white);
	}

	.closing {
		text-align: center;
	}

	.closing h2 {
		max-width: 22ch;
		margin-inline: auto;
	}

	.closing p {
		color: var(--text-on-dark-muted);
		margin-bottom: 2rem;
	}

	@media (max-width: 860px) {
		.hero {
			padding-top: 0;
		}

		.hero-grid {
			grid-template-columns: 1fr;
			gap: 0;
			min-height: 0;
			text-align: center;
		}
		.hero-copy {
			max-width: 100%;
			padding-block: clamp(2.75rem, 8vw, 4rem) 0;
		}
		.hero-img-wrap {
			max-width: 470px;
			min-height: 0;
			margin-inline: auto;
			margin-right: auto;
			margin-top: 1rem;
		}
		.hero-img-wrap::before {
			inset: 6% -8% 6%;
		}
		.hero-img-wrap img {
			width: 100%;
			height: auto;
			min-height: 0;
			margin-inline: auto;
		}
		.hero-actions {
			justify-content: center;
		}
		.hero-sub,
		.trust {
			margin-inline: auto;
		}
	}

	@media (max-width: 480px) {
		.hero-copy h1 {
			font-size: clamp(1.8rem, 7vw, 2.4rem);
		}

		.hero-actions {
			align-items: stretch;
			flex-direction: column;
			max-width: 320px;
			margin-inline: auto;
		}
	}
</style>
