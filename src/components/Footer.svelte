<script>
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="content-wrapper">
		<div class="main-footer-content">
			<p>&copy; {currentYear} Mark Tripney</p>
			<a href="https://twitter.com/marktripney" target="_blank" class="twitter-link">
				<img class="twitter-logo" src="/images/twitter-white.png" alt="Twitter logo" />
			</a>
			<a href="https://github.com/marktripney" target="_blank">
				<img class="github-logo" src="/images/github-light.png" alt="GitHub's Octocat logo" />
			</a>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 1rem 0;
		background-color: #424077;
		font-size: 0.9rem;
	}
	/* Workaround for iOS < 14.1 not supporting flexbox gap property
	(gap IS supported for grid, so can't be used as check; translate also not
	supported pre-14.1, so serves as substitute check) */
	@supports (-webkit-touch-callout: none) and (not (translate: none)) {
		/* Target Twitter link */
		.twitter-link {
			margin-right: 16px;
		}
	}

	.main-footer-content {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	p {
		color: #fff;
		margin-right: auto;
	}

	.twitter-logo {
		height: 30px;
	}

	.github-logo {
		height: 32px;
	}

	a:hover {
		filter: opacity(0.8);
	}
</style>
