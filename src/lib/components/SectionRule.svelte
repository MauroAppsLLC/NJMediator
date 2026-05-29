<script>
	let { eyebrow = '', title = '', center = false } = $props();
</script>

<div class="head" class:center>
	{#if eyebrow}<p class="eyebrow">{eyebrow}</p>{/if}
	{#if title}<h2>{title}</h2>{/if}
	<span class="rule" class:rule--center={center}></span>
</div>

<style>
	.head {
		margin-bottom: clamp(2rem, 4vw, 3.25rem);
	}
	.center {
		text-align: center;
	}
</style>
