<script>
	export let src;
	export let alt;
	export let title;
	export let text;
	export let link;
</script>

<div class="card card-styling">
	<nav class="card-nav">
		<h3 class="card-title">{title}</h3>
	</nav>
	<div class="card-image">
		<a href={link} target="_blank">
			<img {src} {alt} />
		</a>
	</div>
	<div class="card-text">
		<p>{text}</p>
	</div>
</div>

<style>
	.card-nav {
		margin: 0;
		padding: 0 0.75rem 0;
	}

	.card-image img {
		border-radius: 10px 10px 0 0;
	}

	.card {
		margin: 0 auto 2rem;
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		color: #000;
		background-color: #fff;
	}

	h3 {
		font-size: 1.5rem;
		padding: 1rem 0 0.5rem;
	}

	.card-text {
		padding: 0 0.75rem 1.5rem;
	}

	.card-nav {
		order: 1;
		display: flex;
		align-items: center;
	}

	.card-text {
		order: 2;
	}

	@media (hover: hover) and (pointer: fine) {
		.card:hover {
			transform: scale(1.0125);
		}
	}

	@media (min-width: 700px) {
		.card {
			display: grid;
			grid-template-columns: 60% 40%;
			grid-template-rows: min-content 1fr;
			column-gap: 1rem;
			padding-right: 1rem;
		}

		.card-image {
			grid-column: 1/2;
			grid-row: 1/-1;
		}

		.card-image img {
			border-radius: 10px 0 0 10px;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.card-nav,
		.card-text {
			padding-left: 0;
		}

		h3 {
			padding-top: 1rem;
		}
	}

	@media (min-width: 810px) {
		.card-text p {
			font-size: 1.1rem;
		}
	}

	@media (min-width: 1000px) {
		.card-image img {
			border-radius: 10px 10px 0 0;
			height: 300px;
			width: 100%;
		}

		.card {
			padding: 0;
			display: flex;
			flex-direction: column;
			margin: 0;
		}

		h3 {
			padding: 0.5rem 0 0.25rem;
		}

		.card-nav,
		.card-text {
			padding-left: 0.75rem;
		}
	}
</style>
