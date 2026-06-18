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
	<title>John F. Gelson | Mediator, Trial Attorney & Business Counsel — NJ & NY</title>
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
				src="{base}/images/headshot-closeup.jpeg"
				alt="Headshot of John F. Gelson"
				width="2284"
				height="3426"
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
				href="https://www.law.com/corpcounsel/2025/06/12/ex-prison-guard-who-became-jersey-mikes-gc-returns-to-mediation-roots-after-8b-blackstone-sale/?slreturn=20260603151235"
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
		<h2>Experienced mediation. Practical solutions. Efficient outcomes.</h2>
		<span class="rule rule--center"></span>
		<p>Helping people resolve complex disputes across the United States.</p>
		<a class="btn btn--on-dark" href="/contact">Schedule a Consultation</a>
	</div>
</section>

<style>
	.hero {
		overflow: hidden;
		border-bottom: 1px solid var(--hairline);
		background: linear-gradient(
			135deg,
			rgba(28, 46, 74, 0.18) 0%,
			rgba(28, 46, 74, 0.06) 30%,
			var(--off-white) 50%,
			rgba(176, 137, 90, 0.08) 70%,
			rgba(176, 137, 90, 0.2) 100%
		);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 2rem;
	}

	.hero-copy {
		max-width: 460px;
		padding-block: clamp(3rem, 6vw, 5rem);
	}

	.hero-img-wrap {
		position: relative;
		overflow: hidden;
	}

	.hero-img-wrap img {
		-webkit-mask-image:
			linear-gradient(to right, transparent, black 8%, black 92%, transparent),
			linear-gradient(to bottom, transparent, black 6%, black 94%, transparent);
		-webkit-mask-composite: destination-in;
		mask-image:
			linear-gradient(to right, transparent, black 8%, black 92%, transparent),
			linear-gradient(to bottom, transparent, black 6%, black 94%, transparent);
		mask-composite: intersect;
	}

	.hero-img-wrap img {
		width: 100%;
		height: auto;
		display: block;
	}

	.hero-copy h1 {
		font-size: clamp(2.1rem, 4.5vw, 3.25rem);
		color: var(--charcoal);
	}

	.hero-sub {
		font-size: clamp(1.05rem, 1.6vw, 1.25rem);
		color: var(--charcoal);
		max-width: 34ch;
		margin-bottom: 1.5rem;
	}

	.trust {
		font-size: 0.78rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--navy);
		margin-bottom: 2rem;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
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
		.hero-grid {
			grid-template-columns: 1fr;
			text-align: center;
		}
		.hero-copy {
			max-width: 100%;
			padding-block: clamp(2rem, 5vw, 3rem) 0;
		}
		.hero-img-wrap {
			max-width: 420px;
			margin-inline: auto;
		}
		.hero-actions {
			justify-content: center;
		}
	}

	@media (max-width: 480px) {
		.hero-copy h1 {
			font-size: clamp(1.8rem, 7vw, 2.4rem);
		}
	}
</style>
