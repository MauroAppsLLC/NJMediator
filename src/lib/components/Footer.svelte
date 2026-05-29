<script>
	import { nav, site } from '$lib/site.js';
	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container inner">
		<div class="block">
			<span class="brand-name">{site.name}</span>
			<span class="brand-sub">{site.tagline}</span>
			<p class="region">{site.region}</p>
		</div>

		<nav class="foot-nav" aria-label="Footer">
			<ul>
				{#each nav as item}
					<li><a href={item.href}>{item.label}</a></li>
				{/each}
			</ul>
		</nav>

		<div class="block contact">
			<a href="tel:{site.phone.replace(/[^0-9]/g, '')}">{site.phone}</a>
			<a href="mailto:{site.email}">{site.email}</a>
			<address>{site.address.street}<br />{site.address.city}</address>
		</div>
	</div>

	<div class="container baseline">
		<span>&copy; {year} {site.name}. All rights reserved.</span>
		<span class="legal">All inquiries are confidential.</span>
	</div>
</footer>

<style>
	.site-footer {
		background: var(--charcoal);
		color: var(--text-on-dark-muted);
		padding-block: clamp(3rem, 5vw, 4.5rem) 1.75rem;
	}

	.inner {
		display: grid;
		grid-template-columns: 1.4fr 1fr 1.2fr;
		gap: 2.5rem;
		padding-bottom: 2.5rem;
		border-bottom: 1px solid var(--hairline-dark);
	}

	.block {
		display: flex;
		flex-direction: column;
	}

	.brand-name {
		font-family: var(--font-heading);
		font-size: 1.35rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-on-dark);
	}

	.brand-sub {
		font-size: 0.62rem;
		font-weight: 500;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--gold);
		margin-top: 0.35rem;
	}

	.region {
		margin: 1rem 0 0;
		font-size: 0.92rem;
	}

	.foot-nav ul {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}

	.foot-nav a {
		font-size: 0.82rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		transition: color 0.2s ease;
	}

	.foot-nav a:hover,
	.contact a:hover {
		color: var(--text-on-dark);
	}

	.contact {
		gap: 0.55rem;
		font-size: 0.95rem;
	}

	.contact address {
		font-style: normal;
		margin-top: 0.4rem;
		line-height: 1.6;
	}

	.baseline {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 1.75rem;
		font-size: 0.78rem;
		letter-spacing: 0.04em;
		color: rgba(244, 242, 238, 0.55);
	}

	@media (max-width: 760px) {
		.inner {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
