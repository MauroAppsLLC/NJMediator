<script>
	import { base } from '$app/paths';
	import { site } from '$lib/site.js';
	import SectionRule from '$lib/components/SectionRule.svelte';

	const experience = [
		{
			role: 'VP & General Counsel',
			org: "Jersey Mike's Franchise Systems, Inc.",
			period: '2011 – 2025',
			detail:
				"Served as General Counsel during the company's expansion from 300 locations to more than 3,500 restaurants and $3.5 billion in sales. Guided legal matters through the company's $8 billion acquisition by Blackstone."
		},
		{
			role: 'Founder',
			org: 'NJ Mediator Resolution Services',
			period: '1995 – Present',
			detail:
				'Conducted more than 1,500 mediations across commercial, construction, employment, franchise, and complex civil matters.'
		},
		{
			role: 'Senior Partner',
			org: 'McLaughlin, Bennett & Gelson',
			period: '1993 – 2012',
			detail: ''
		},
		{
			role: 'Senior Partner',
			org: 'Rothstein, Mandell, Strohm & Gelson',
			period: '1981 – 1993',
			detail: 'Tried more than 100 jury and non-jury cases in federal and state courts.'
		}
	];

	const certifications = [
		'Certified by the Supreme Court of New Jersey as a Court-Appointed Mediator since 1995',
		'AV Rated by Martindale-Hubbell™',
		'Best Lawyers in America™',
		'New Jersey Super Lawyer™',
		'National Association of Distinguished Mediators'
	];

	const education = [
		{ school: 'University of Notre Dame', degree: 'B.A., English' },
		{ school: 'Drake University Law School', degree: 'J.D.' },
		{ school: 'London School of Economics', degree: 'International Law' }
	];
</script>

<svelte:head>
	<title>About | John F. Gelson — Mediator, Trial Attorney & Business Counsel</title>
	<meta
		name="description"
		content="More than four decades as a mediator, trial attorney, and business counsel. Since 1995, John F. Gelson has conducted over 1,500 mediations across New Jersey and New York."
	/>
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">About</p>
			<h1>About John F. Gelson</h1>
			<p class="roles">Mediator &bull; Trial Attorney &bull; Business Counsel</p>
			<span class="rule"></span>
			<p class="since">Serving New Jersey &amp; New York since 1995</p>
		</div>
		<div class="hero-portrait">
			<img
				src="{base}/images/john-gelson-portrait.png"
				alt="Seated portrait of John F. Gelson"
				width="819"
				height="819"
			/>
		</div>
	</div>
</section>

<section class="section intro">
	<div class="container intro-grid">
		<div class="intro-copy">
			<p>
				John F. Gelson has served as a mediator, trial attorney, business counsel, and legal
				advisor for more than four decades.
			</p>
			<p>
				Since 1995, he has conducted more than 1,500 mediations across commercial, construction,
				employment, franchise, and complex business disputes.
			</p>
			<p>
				Known for his practical judgment, calm demeanor, and ability to resolve difficult matters
				efficiently, John is trusted by attorneys, business leaders, insurance carriers, and private
				clients throughout New Jersey and New York.
			</p>
		</div>

		<div class="experience">
			<SectionRule eyebrow="Professional Experience" />
			<ol class="exp-list">
				{#each experience as item}
					<li class="exp-item">
						<div class="exp-head">
							<div>
								<h3>{item.role}</h3>
								<p class="org">{item.org}</p>
							</div>
							<span class="period">{item.period}</span>
						</div>
						{#if item.detail}<p class="detail">{item.detail}</p>{/if}
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<section class="section credentials">
	<div class="container cred-grid">
		<div>
			<SectionRule eyebrow="Certifications & Recognition" />
			<ul class="bullets">
				{#each certifications as c}
					<li>{c}</li>
				{/each}
			</ul>
		</div>
		<div>
			<SectionRule eyebrow="Education" />
			<ul class="edu">
				{#each education as e}
					<li>
						<span class="school">{e.school}</span>
						<span class="degree">{e.degree}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="section-dark brand-final">
	<div class="container">
		<p class="brand-quote">&ldquo;{site.brandLine}&rdquo;</p>
	</div>
</section>

<style>
	.hero {
		background: linear-gradient(180deg, var(--off-white), var(--warm-gray));
		border-bottom: 1px solid var(--hairline);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		align-items: center;
		gap: clamp(2rem, 5vw, 4rem);
		padding-block: clamp(3rem, 6vw, 5rem);
	}

	.hero-copy h1 {
		color: var(--navy);
	}

	.roles {
		font-family: var(--font-heading);
		font-size: 1.15rem;
		color: var(--gold);
		margin: 0.75rem 0 0;
	}

	.since {
		font-style: italic;
		font-family: var(--font-heading);
		color: var(--text-muted);
		margin: 0;
	}

	.hero-portrait img {
		width: 100%;
		border-radius: var(--radius);
		box-shadow: 0 30px 60px -30px rgba(28, 46, 74, 0.45);
	}

	.intro {
		background: #fff;
	}

	.intro-grid {
		display: grid;
		grid-template-columns: 0.85fr 1.15fr;
		gap: clamp(2.5rem, 6vw, 5rem);
		align-items: start;
	}

	.intro-copy p {
		font-size: 1.05rem;
		color: var(--text);
	}

	.exp-list {
		display: flex;
		flex-direction: column;
		list-style: none;
		margin: 0;
		padding: 0;
		counter-reset: none;
	}

	.exp-item {
		padding: 1.5rem 0;
		border-top: 1px solid var(--hairline);
	}

	.exp-item:first-child {
		padding-top: 0;
		border-top: 0;
	}

	.exp-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
	}

	.exp-head h3 {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--charcoal);
	}

	.org {
		margin: 0.2rem 0 0;
		color: var(--text-muted);
		font-weight: 500;
	}

	.period {
		flex-shrink: 0;
		font-size: 0.85rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		color: var(--gold);
		white-space: nowrap;
	}

	.detail {
		margin: 0.75rem 0 0;
		font-size: 0.95rem;
		color: var(--text-muted);
	}

	.credentials {
		background: var(--off-white);
		border-top: 1px solid var(--hairline);
	}

	.cred-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(2.5rem, 6vw, 5rem);
	}

	.bullets li {
		position: relative;
		padding-left: 1.5rem;
		margin-bottom: 1rem;
		color: var(--text);
	}

	.bullets li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.65em;
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--gold);
	}

	.edu li {
		display: flex;
		flex-direction: column;
		padding: 1rem 0;
		border-top: 1px solid var(--hairline);
	}

	.edu li:first-child {
		padding-top: 0;
		border-top: 0;
	}

	.school {
		font-weight: 600;
		color: var(--charcoal);
	}

	.degree {
		color: var(--text-muted);
		font-size: 0.95rem;
	}

	.brand-final {
		padding-block: clamp(4rem, 9vw, 7rem);
		text-align: center;
	}

	.brand-quote {
		font-family: var(--font-heading);
		font-style: italic;
		font-size: clamp(1.6rem, 3.5vw, 2.6rem);
		color: var(--text-on-dark);
		max-width: 22ch;
		margin: 0 auto;
		line-height: 1.3;
	}

	@media (max-width: 860px) {
		.hero-grid,
		.intro-grid,
		.cred-grid {
			grid-template-columns: 1fr;
		}
		.hero-portrait {
			order: -1;
			max-width: 440px;
		}
	}
</style>
