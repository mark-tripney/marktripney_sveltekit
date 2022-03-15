<script>
	import { formatDate } from '$lib/utility_funcs/date-formatter';
	export let title;
	export let date;
</script>

<div class="content-wrapper">
	<hr class="upper-hr" />
	<h1 class="post-title">{title}</h1>
	<p class="published-date">{formatDate(date)}</p>
	<div class="slot-container">
		<slot />
	</div>
	<p class="writing-link">&larr; <a href="/writing" class="non-body-link">Writing</a><br /></p>
</div>

<style>
	.slot-container {
		margin-top: 2rem;
		max-width: 750px;
	}
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

	.writing-link {
		margin: 3rem 0;
	}
</style>
