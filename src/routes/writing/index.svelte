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
			background: 'rgba(245, 223, 77, 1)',
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
			<li>
				<a href={post.path}>
					<h3 class="main-link">{post.meta.title}</h3>
					Published {formatDate(post.meta.date)}
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
		align-items: end;
		width: 100%;
		margin-bottom: 2rem;
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
		margin-bottom: 3rem;
	}

	li {
		position: relative;
		margin-bottom: 1rem;
		padding: 0.5rem 1rem;
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0.8px 0.8px 2.2px rgba(0, 0, 0, 0.02), 2px 2px 5.3px rgba(0, 0, 0, 0.028),
			3.8px 3.8px 10px rgba(0, 0, 0, 0.035), 6.7px 6.7px 17.9px rgba(0, 0, 0, 0.042),
			12.5px 12.5px 33.4px rgba(0, 0, 0, 0.05), 30px 30px 80px rgba(0, 0, 0, 0.07);
	}

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
		font-size: 0.9rem;
	}

	aside {
		margin-top: 0.5rem;
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

	.category ~ .category {
		margin-left: 0.5rem;
	}

	.category p {
		font-weight: 600;
		font-size: 0.8rem;
	}

	.home-link {
		margin-bottom: 3rem;
	}
</style>
