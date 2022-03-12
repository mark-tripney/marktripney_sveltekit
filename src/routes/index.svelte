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
			<p>These are some examples of recent work.</p>
			<div class="grid-container">
				<!-- devsearch -->
				<Card
					src="/images/devfinder-dark-mix-crop.png"
					alt="Screenshot from 'devfinder' app, showing light and dark mode side-by-side."
					title="devfinder"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem commodi odit perferendis error obcaecati officia molestias ex illo neque?"
					link="https://github-user-search-peach.vercel.app/"
				/>
				<!-- Password Generator -->
				<Card
					src="/images/password-generator-crop.png"
					alt="Screenshot from 'Password Generator' app."
					title="Password Generator"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem commodi odit perferendis error obcaecati officia molestias ex illo neque?"
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
	#intro {
		padding: 0 0 3.5rem;
	}

	#work {
		padding: 1rem 0 1.5rem;
	}

	#contact {
		padding: 3rem 0 4rem;
	}

	.upper-hr {
		background-color: coral;
	}

	.square {
		height: 3rem;
		width: 3rem;
		background-color: #f5df4d;
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

	/*#work h2,*/
	/*#work p {*/
	/*	color: #fff;*/
	/*}*/

	.diagonal-div {
		background: linear-gradient(45deg, rgba(245, 223, 77, 1) 0%, rgba(252, 252, 252, 1) 100%);
		transform: skewY(-2deg);
		padding: 4rem 0;
	}

	.diagonal-wrapper {
		transform: skewY(2deg);
	}

	@media (min-width: 1000px) {
		.grid-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
			padding-bottom: 2rem;
		}
	}

	#contact h2 {
		margin-bottom: 0.5rem;
	}
</style>
