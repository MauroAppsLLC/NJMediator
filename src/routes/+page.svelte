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
	<img
		class="hero-bg"
		src="{base}/images/hero-mediator.png"
		alt="Portrait of John F. Gelson, mediator and trial attorney"
		width="1672"
		height="941"
	/>
	<div class="container hero-inner">
		<div class="hero-copy">
			<h1>The mediator everyone<br />wants in the room.</h1>
			<span class="rule"></span>
			<p class="hero-sub">
				Resolving complex disputes with experience, credibility, and a style that puts people at
				ease.
			</p>
			<p class="trust">
				Serving New Jersey &amp; New York &nbsp;|&nbsp; 30+ Years of Experience &nbsp;|&nbsp;
				Court-Appointed Since 1995
			</p>
			<div class="hero-actions">
				<a class="btn" href="/contact">Schedule a Consultation</a>
				<a class="btn btn--ghost" href="/about">About John</a>
			</div>
		</div>
	</div>
</section>

<section class="section stats-section">
	<div class="container">
		<SectionRule eyebrow="Why Clients Choose John" title="A trusted mediator serving NJ & NY" center />
		<StatGrid items={stats} />
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
		display: grid;
		overflow: hidden;
		background: var(--off-white);
		border-bottom: 1px solid var(--hairline);
	}

	.hero > *,
	.hero::after {
		grid-area: 1 / 1;
	}

	.hero-bg {
		width: 100%;
		height: auto;
		align-self: end;
		display: block;
	}

	.hero::after {
		content: '';
		z-index: 1;
		background: linear-gradient(
			90deg,
			var(--off-white) 0%,
			rgba(248, 247, 244, 0.65) 32%,
			rgba(248, 247, 244, 0) 60%
		);
		pointer-events: none;
	}

	.hero-inner {
		z-index: 2;
		align-self: center;
		padding-block: clamp(2rem, 4vw, 3.25rem);
	}

	.hero-copy {
		max-width: 500px;
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
			display: flex;
			flex-direction: column;
		}
		.hero > * {
			grid-area: auto;
		}
		.hero-inner {
			order: 1;
			align-self: auto;
			z-index: auto;
		}
		.hero-bg {
			order: 2;
			align-self: auto;
		}
		.hero::after {
			display: none;
		}
		.hero-copy {
			max-width: 100%;
		}
	}
</style>
