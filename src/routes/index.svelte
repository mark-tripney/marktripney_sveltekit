<script>
	import Contact from '$lib/components/Contact.svelte';
</script>

<section id="intro" class="dotted-bg">
	<div class="content-wrapper">
		<hr />
		<h1 class="main-head">Hi, I'm Mark.</h1>
		<h2 class="main-sub-head">I'm a front-end developer, designer, and writer.</h2>
		<div class="square" />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam autem beatae est iure
			laborum magni nobis reiciendis temporibus. Aliquam at ea excepturi hic illo laudantium
			necessitatibus perferendis possimus soluta?
		</p>
		<p>
			<span class="wave">👋</span> Want to get in touch? Great! You can reach me
			<a href="#contact">here</a>. I look forward to hearing from you!
		</p>
	</div>
</section>

<section id="work">
	<div class="content-wrapper">
		<h2>Work</h2>
		<p>These are some examples of recent work.</p>
	</div>
</section>

<section id="contact" class="dotted-bg">
	<div class="content-wrapper">
		<h2>Contact</h2>
		<Contact />
	</div>
</section>

<style>
	#intro {
		padding: 3rem 0 3.5rem;
	}

	#work {
		padding: 1rem 0 1.5rem;
	}

	#contact {
		padding: 3rem 0 4rem;
	}

	hr {
		width: 100px;
		margin: 0 0 3rem 0;
		height: 10px;
		background-color: coral;
		border: none;
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

	#work {
		background-color: #e5e5f1;
	}

	#contact h2 {
		margin-bottom: 0.5rem;
	}
</style>
