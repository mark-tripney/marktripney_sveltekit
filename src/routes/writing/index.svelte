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
	const categoryStyles = {
		svelte: {
			name: 'Svelte',
			background: 'rgba(223, 76, 37, 1)',
			color: '#fff'
		},
		javascript: {
			name: 'JavaScript',
			background: 'var(--clr-yellow)',
			color: '#000'
		},
		css: {
			name: 'CSS',
			background: '#2c4bdd',
			color: '#fff'
		}
	};
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
			<li class="card-styling">
				<a href={post.path}>
					<h3 class="main-link">{post.meta.title}</h3>
					<aside>Published {formatDate(post.meta.date)}</aside>
					{#if post.meta.categories.length}
						<aside>
							<div class="categories">
								{#each post.meta.categories as category}
									<div
										class="category"
										style="background-color: {categoryStyles[category].background};"
									>
										<p style="color: {categoryStyles[category].color};">
											{categoryStyles[category].name}
										</p>
									</div>
								{/each}
							</div>
						</aside>
					{/if}
				</a>
			</li>
		{/each}
	</ul>
	<p class="home-link">&larr; <a href="/" class="non-body-link">Home</a></p>
</div>

<style>
	.upper-hr {
		background-color: skyblue;
	}

	.circle-group {
		display: flex;
		width: 100%;
		margin-bottom: 2rem;
		justify-content: flex-end;
		align-items: flex-end;
	}

	.circle {
		height: 1rem;
		width: 1rem;
		border-radius: 50%;
		background-color: var(--clr-yellow);
		margin-right: 0.5rem;
		margin-left: auto;
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
		margin-bottom: 3rem;
	}

	li {
		position: relative;
		padding: 0.5rem 1rem;
		background-color: #fff;
		border-radius: 8px;
	}

	li + li {
		margin-top: 1.5rem;
	}

	@media (hover: hover) and (pointer: fine) {
		li:hover {
			transform: scale(1.0125);
		}
	}

	/* Make whole card clickable */
	.main-link::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	a {
		text-decoration: none;
	}

	aside {
		font-size: 0.9rem;
	}

	aside:nth-of-type(2) {
		margin-top: 0.25rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	.category {
		display: inline-block;
		padding: 4px 10px;
		border-radius: 12px;
		margin-bottom: 0.5rem;
	}

	.category p {
		font-weight: 600;
		font-size: 0.8rem;
	}

	.category ~ .category {
		margin-left: 0.5rem;
	}

	.home-link {
		margin-bottom: 3rem;
	}
</style>
