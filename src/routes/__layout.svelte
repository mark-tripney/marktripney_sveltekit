<script>
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/global.css';
</script>

<div class="wrapper">
	<header>
		<Nav />
	</header>
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	/* Force footer to bottom (1/2) */
	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* Force footer to bottom (2/2) */
	main {
		flex: 1;
	}

	header {
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.022), 0 4px 4px rgba(0, 0, 0, 0.031),
			0 7px 7px rgba(0, 0, 0, 0.039), 0 15px 15px rgba(0, 0, 0, 0.048),
			0 40px 40px rgba(0, 0, 0, 0.07);
	}
</style>
