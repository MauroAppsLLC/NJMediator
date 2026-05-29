<script>
	import { page } from '$app/stores';
	import { nav, site } from '$lib/site.js';

	let open = $state(false);

	const close = () => (open = false);

	function isActive(href) {
		const path = $page.url.pathname;
		return href === '/' ? path === '/' : path.startsWith(href);
	}
</script>

<header class="site-header">
	<div class="container bar">
		<a class="brand" href="/" onclick={close} aria-label="{site.name} home">
			<span class="brand-name">{site.name}</span>
			<span class="brand-sub">{site.tagline}</span>
		</a>

		<button
			class="menu-toggle"
			aria-expanded={open}
			aria-controls="primary-nav"
			onclick={() => (open = !open)}
		>
			<span class="sr-only">Menu</span>
			<span class="bars" class:open></span>
		</button>

		<nav id="primary-nav" class="nav" class:open aria-label="Primary">
			<ul>
				{#each nav as item}
					<li>
						<a
							href={item.href}
							class:active={isActive(item.href)}
							aria-current={isActive(item.href) ? 'page' : undefined}
							onclick={close}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(248, 247, 244, 0.88);
		backdrop-filter: saturate(140%) blur(10px);
		border-bottom: 1px solid var(--hairline);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		min-height: 78px;
	}

	.brand {
		display: flex;
		flex-direction: column;
		line-height: 1.1;
	}

	.brand-name {
		font-family: var(--font-heading);
		font-size: 1.45rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		color: var(--navy);
		text-transform: uppercase;
	}

	.brand-sub {
		font-family: var(--font-body);
		font-size: 0.62rem;
		font-weight: 500;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--gold);
		margin-top: 0.3rem;
	}

	.nav ul {
		display: flex;
		align-items: center;
		gap: 2.25rem;
	}

	.nav a {
		position: relative;
		font-size: 0.82rem;
		font-weight: 500;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--charcoal);
		padding-block: 0.5rem;
		transition: color 0.2s ease;
	}

	.nav a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 1.5px;
		background: var(--gold);
		transition: width 0.25s ease;
	}

	.nav a:hover {
		color: var(--navy);
	}

	.nav a.active {
		color: var(--navy);
	}

	.nav a.active::after,
	.nav a:hover::after {
		width: 100%;
	}

	.menu-toggle {
		display: none;
		position: relative;
		width: 40px;
		height: 40px;
		border: 0;
		background: transparent;
	}

	.bars,
	.bars::before,
	.bars::after {
		content: '';
		position: absolute;
		left: 8px;
		width: 24px;
		height: 2px;
		background: var(--charcoal);
		transition: transform 0.25s ease, opacity 0.2s ease;
	}

	.bars {
		top: 19px;
	}
	.bars::before {
		top: -7px;
	}
	.bars::after {
		top: 7px;
	}

	.bars.open {
		background: transparent;
	}
	.bars.open::before {
		transform: translateY(7px) rotate(45deg);
	}
	.bars.open::after {
		transform: translateY(-7px) rotate(-45deg);
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 760px) {
		.menu-toggle {
			display: block;
		}

		.nav {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: var(--off-white);
			border-bottom: 1px solid var(--hairline);
			display: grid;
			grid-template-rows: 0fr;
			transition: grid-template-rows 0.3s ease;
		}

		.nav.open {
			grid-template-rows: 1fr;
		}

		.nav ul {
			flex-direction: column;
			align-items: stretch;
			gap: 0;
			overflow: hidden;
		}

		.nav li {
			border-top: 1px solid var(--hairline);
		}

		.nav a {
			display: block;
			padding: 1.1rem var(--gutter);
		}

		.nav a::after {
			display: none;
		}
	}
</style>
