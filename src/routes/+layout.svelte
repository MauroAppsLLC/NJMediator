<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<a class="skip-link" href="#main">Skip to content</a>
<Header />
<main id="main">
	{@render children()}
</main>
<Footer />

<style>
	main {
		min-height: 60vh;
	}

	.skip-link {
		position: absolute;
		left: -999px;
		top: 0;
		z-index: 100;
		background: var(--navy);
		color: var(--text-on-dark);
		padding: 0.75rem 1.25rem;
		font-size: 0.85rem;
	}

	.skip-link:focus {
		left: 0;
	}
</style>
