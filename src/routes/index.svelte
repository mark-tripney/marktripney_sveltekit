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
		<div class="intro-text">
			<p>
				<span class="wave">👋</span> I'm a self-taught developer, working primarily in JavaScript,
				Svelte, and SvelteKit, but with a good working knowledge of React, too. (I've also got a
				fair understanding of Python, if that's something you need!) I love writing CSS, and have a
				real passion for developing well-crafted and accessible websites and apps. I enjoy writing
				about the tools and technologies I use — you can view my recent written work
				<a href="/writing">here</a>.
			</p>
			<p>
				Want to get in touch? Great! There's a contact form
				<a href="#contact">here</a>. I look forward to hearing from you!
			</p>
		</div>
	</div>
</section>

<section id="work">
	<div class="diagonal-div">
		<div class="content-wrapper diagonal-wrapper">
			<h2>Work</h2>
			<p class="work-intro">
				These are some of my most recent projects. Click on a preview image to visit the site in a
				new browser tab.
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
					text="What portfolio would be complete without a Todo app? (No portfolio is complete without a Todo app.) This big, bold example is built in React and has some nice little visual flourishes."
					link="https://react-todos-marktripney.vercel.app/"
				/>
				<!-- Pricing Cards with Toggle -->
				<Card
					src="/images/pricing-cards-with-toggle-crop.png"
					alt="Screenshot from 'Pricing Cards' app."
					title="Pricing Cards with Toggle"
					text="A Svelte-based site exhibiting a classic design pattern — pricing cards, with a monthly/annual toggle, and a prominent 'most popular choice' card front-and-center."
					link="https://pricing-with-toggle-beige.vercel.app"
				/>
				<!-- Ratings Component -->
				<Card
					src="/images/ratings-component-crop.png"
					alt="Screenshot from 'Ratings Component' app."
					title="Ratings Component"
					text="A Svelte-built example of a well-established website component, this gives the user a chance to rate their experience and see a swapped-out 'Thank you' card on submission. Simple concept, but there are some neat Svelte tricks in here!"
					link="https://ratings-component.vercel.app"
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

	p {
		max-width: 750px;
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
