<script context="module">
	import { formatDate } from '$lib/utility_funcs/date-formatter';
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<div class="content-wrapper">
	<hr class="upper-hr" />
	<h1>Writing</h1>
	<div class="circle-group">
		<div class="circle" />
		<div class="circle2" />
	</div>
	<ul>
		{#each posts as post}
			<li>
				<h3>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h3>
				Published {formatDate(post.meta.date)}
			</li>
		{/each}
	</ul>
</div>

<style>
	.upper-hr {
		background-color: skyblue;
	}

	.circle-group {
		display: flex;
		align-items: end;
		width: 100%;
	}

	.circle {
		height: 1rem;
		width: 1rem;
		border-radius: 50%;
		background-color: #f5df4d;
		margin-left: auto;
		margin-right: 0.5rem;
	}

	.circle2 {
		height: 1.5rem;
		width: 1.5rem;
		border-radius: 50%;
		background-color: hotpink;
	}

	ul {
		list-style: none;
		padding-left: 0;
	}

	li {
		margin-bottom: 1rem;
	}

	a {
		text-decoration: none;
	}

	h3 {
		font-size: 1.5rem;
	}
</style>
