<nav class="content-wrapper">
	<ul>
		<li>
			<a href="/"
				><img
					src="/images/memoji.png"
					alt="Memoji of Mark Tripney, looking over the top of an open laptop"
				/></a
			>
		</li>
		<li><a class="main-nav-link" href="/#work">Work</a></li>
		<li><a class="main-nav-link" href="/blog">Writing</a></li>
		<li><a class="main-nav-link" href="/#contact">Contact</a></li>
	</ul>
</nav>

<style>
	nav {
		padding: 1rem 0;
	}

	ul {
		display: flex;
		flex-flow: row nowrap;
		gap: 1rem;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li:first-child {
		margin-right: auto;
	}
	/* Workaround for iOS < 14.1 not supporting flexbox gap property
  (gap IS supported for grid, so can't be used as check; translate also not
  supported pre-14.1, so serves as substitute check) */
	@supports (-webkit-touch-callout: none) and (not (translate: none)) {
		/* Target 2nd and 3rd li elements */
		ul li:nth-child(n + 2):nth-child(-n + 3) {
			margin-right: 16px;
		}
	}

	.main-nav-link {
		margin-bottom: 3rem;
		font-size: 1rem;
		font-weight: 700;
		color: #5f5260;
		text-decoration: none;
		padding: 0 0 2px;
		border-bottom: 3px solid transparent;
	}

	.main-nav-link:hover {
		border-bottom: 3px solid #5f5260;
	}

	img {
		width: 44px;
	}

	/**************************************************
  Media query: min-width 414px
  **************************************************/
	@media (min-width: 414px) {
		ul {
			gap: 1.5rem;
		}

		a {
			font-size: 1.1rem;
		}
	}
</style>
