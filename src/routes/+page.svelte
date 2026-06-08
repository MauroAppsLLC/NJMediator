<script>
	import { base } from '$app/paths';
	import StatGrid from '$lib/components/StatGrid.svelte';
	import FeatureGrid from '$lib/components/FeatureGrid.svelte';
	import SectionRule from '$lib/components/SectionRule.svelte';

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
		content="John F. Gelson resolves complex disputes across New Jersey and New York with experience, credibility, and a style that puts people at ease. Court-appointed mediator since 1995."
	/>
</svelte:head>

<section class="hero">
	<div class="hero-layout">
		<div class="container hero-text-wrap">
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
					<a class="btn btn--ghost" href="/about">About John</a>
				</div>
			</div>
		</div>
		<div class="hero-img-wrap">
			<img
				src="{base}/images/headshot-main.png"
				alt="Headshot of John F. Gelson, mediator and trial attorney"
				width="1080"
				height="904"
			/>
		</div>
	</div>
</section>

<section class="section stats-section">
	<div class="container">
		<SectionRule eyebrow="Why Clients Choose John" title="A trusted mediator serving across the United States" center />
		<StatGrid items={stats} />
	</div>
</section>

<section class="section press">
	<div class="container press-inner">
		<p class="eyebrow">In the News</p>
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

<section class="section litigation">
	<div class="container">
		<SectionRule title="Mediation Over Litigation" center />
		<FeatureGrid items={advantages} columns={4} boxed />
	</div>
</section>

<section class="section section-dark closing">
	<div class="container container--narrow">
		<h2>Experienced mediation. Practical solutions. Efficient outcomes.</h2>
		<span class="rule rule--center"></span>
		<p>Helping people resolve complex disputes across New Jersey and New York.</p>
		<a class="btn btn--on-dark" href="/contact">Schedule a Consultation</a>
	</div>
</section>

<style>
	.hero {
		background: var(--off-white);
		border-bottom: 1px solid var(--hairline);
		overflow: hidden;
	}

	.hero-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: 1400px;
		margin-inline: auto;
		min-height: clamp(420px, 52vh, 560px);
	}

	.hero-text-wrap {
		align-self: center;
		padding-block: clamp(2rem, 4vw, 3rem);
	}

	.hero-copy {
		max-width: 480px;
		margin-left: auto;
		padding-right: clamp(1.5rem, 3vw, 3rem);
	}

	.hero-img-wrap {
		position: relative;
		overflow: hidden;
	}

	.hero-img-wrap::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: 1;
		background:
			linear-gradient(to left, transparent 70%, var(--off-white) 100%),
			linear-gradient(to top, var(--off-white) 0%, transparent 30%),
			linear-gradient(to bottom, rgba(248, 247, 244, 0.4) 0%, transparent 10%),
			linear-gradient(to right, transparent 85%, rgba(248, 247, 244, 0.4) 100%);
		pointer-events: none;
	}

	.hero-img-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 15%;
		display: block;
	}

	.hero-copy h1 {
		font-size: clamp(2.1rem, 4.5vw, 3.25rem);
		color: var(--navy);
	}

	.hero-sub {
		font-size: clamp(1.05rem, 1.6vw, 1.25rem);
		color: var(--text-muted);
		max-width: 34ch;
		margin-bottom: 1.5rem;
	}

	.trust {
		font-size: 0.78rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--text-muted);
		margin-bottom: 2rem;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
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
		.hero-layout {
			grid-template-columns: 1fr;
			min-height: auto;
		}
		.hero-copy {
			max-width: 100%;
			margin-left: 0;
			padding-right: 0;
		}
		.hero-img-wrap {
			max-height: 400px;
		}
	}
</style>
