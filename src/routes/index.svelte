<script>
	import Contact from '../components/Contact.svelte';
</script>

<section id="intro" class="dotted-bg">
	<div class="content-wrapper">
		<h1>Hello! I'm Mark, and I design and build for the web.</h1>
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
		padding: 3rem 0;
	}

	#work {
		padding: 1rem 0 1.5rem;
	}

	#contact {
		padding: 3rem 0;
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
</style>
