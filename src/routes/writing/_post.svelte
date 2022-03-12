<script>
	import { formatDate } from '$lib/utility_funcs/date-formatter';
	export let title;
	export let date;
	export let categories;
</script>

<div class="content-wrapper">
	<hr class="upper-hr" />
	<h1 class="post-title">{title}</h1>
	<p class="published-date">Published on {formatDate(date)}.</p>
	<slot />
	{#if categories.length}
		<aside>
			<h2>Posted in:</h2>
			<ul>
				{#each categories as category}
					<li>
						<a href="/blog/categories/{category}">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</div>

<style>
	.upper-hr {
		background-color: darkseagreen;
	}

	.post-title {
		margin-top: 3rem;
		margin-left: -3px;
	}

	.published-date {
		margin: 0;
		color: darkslategrey;
		font-size: 0.9rem;
	}
</style>
