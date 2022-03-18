<script>
	import Card from '$lib/components/Card.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<section id="intro">
	<div class="content-wrapper">
		<hr class="upper-hr" />
		<h1 class="main-head">Hi, I'm Mark.</h1>
		<h2 class="main-sub-head">I'm a front-end developer, designer, and writer.</h2>
		<div class="square" />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem beatae est iure
			laborum magni nobis reiciendis temporibus. Aliquam at ea excepturi hic illo laudantium
			necessitatibus perferendis possimus soluta?
		</p>
		<p>
			<span class="wave">👋</span> Want to get in touch? Great! There's a contact form
			<a href="#contact">here</a>. I look forward to hearing from you!
		</p>
	</div>
</section>

<section id="work">
	<div class="diagonal-div">
		<div class="content-wrapper diagonal-wrapper">
			<h2>Work</h2>
			<p class="work-intro">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aut corporis dignissimos
				eligendi inventore magnam molestiae natus quas quidem reiciendis?
			</p>
			<div class="grid-container">
				<!-- devsearch -->
				<Card
					src="/images/devfinder-dark-mix-crop.png"
					alt="Screenshot from 'devfinder' app, showing light and dark mode side-by-side."
					title="devfinder"
					text="Search for developers on GitHub and view basic information from
            their profile — bio, follower counts, number of repos, and so
            on. Can't think of anyone? Never mind. You can always keep track of
            Octocat instead."
					link="https://github-user-search-peach.vercel.app/"
				/>
				<!-- Password Generator -->
				<Card
					src="/images/password-generator-crop.png"
					alt="Screenshot from 'Password Generator' app."
					title="Password Generator"
					text="Generate passwords up to 64 characters in length using a
            configurable combination of upper- and lower-case letters, numbers,
            and symbols. Happy with the result? Copy it to your clipboard with one click!"
					link="https://password-generator-eta-two.vercel.app/"
				/>
				<!-- todos -->
				<Card
					src="/images/todo-react-crop.png"
					alt="Screenshot from 'todos' app."
					title="todos"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem commodi odit perferendis error obcaecati officia molestias ex illo neque?"
					link="https://react-todos-marktripney.vercel.app/"
				/>
				<!-- Pricing Cards with Toggle -->
				<Card
					src="/images/pricing-cards-with-toggle-crop.png"
					alt="Screenshot from 'Pricing Cards' app."
					title="Pricing Cards with Toggle"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem commodi odit perferendis error obcaecati officia molestias ex illo neque?"
					link="https://pricing-with-toggle-beige.vercel.app"
				/>
			</div>
		</div>
	</div>
</section>

<section id="contact">
	<div class="content-wrapper">
		<h2>Contact</h2>
		<Contact />
	</div>
</section>

<style>
	section {
		margin-top: 3rem;
	}
	#intro {
		padding: 0 0 3.5rem;
	}

	#work {
		padding: 0rem 0 1.5rem;
	}

	#contact {
		padding: 3rem 0 5rem;
	}

	.upper-hr {
		background-color: coral;
	}

	.square {
		height: 3rem;
		width: 3rem;
		background-color: var(--clr-yellow);
		margin-left: auto;
		margin-bottom: 2rem;
	}

	.main-head {
		margin-bottom: 1rem;
	}

	.main-sub-head {
		font-weight: 400;
		line-height: 1.2;
		margin-bottom: 1rem;
	}

	.wave {
		animation-name: wave-animation;
		animation-duration: 2.5s;
		animation-iteration-count: infinite;
		transform-origin: 70% 70%;
		display: inline-block;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		}
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}

	.diagonal-div {
		background: linear-gradient(0deg, rgba(245, 223, 77, 1) 0%, rgba(252, 252, 252, 1) 100%);
		transform: skewY(-2deg);
		padding: 0 0 7rem;
	}

	.diagonal-wrapper {
		transform: skewY(2deg);
	}

	h2 {
		margin-bottom: 1rem;
		font-size: 3rem;
	}

	.work-intro {
		margin-bottom: 3rem;
	}

	@media (min-width: 1000px) {
		.grid-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
			padding-bottom: 2rem;
		}
	}
</style>
