<script>
	let submitStatus;
	const submitForm = async (data) => {
		submitStatus = 'submitting';
		const formData = new FormData(data.currentTarget);
		console.log(formData.get('name'));
		console.log(formData.get('email'));
		console.log(formData.get('message'));
		const response = await fetch('contact.json', {
			method: 'POST',
			body: formData
		});

		const { message } = await response.json();
		submitStatus = message;
	};

	const refreshForm = () => {
		/* Trigger re-render of component */
		submitStatus = undefined;
	};
</script>

{#if submitStatus === 'submitting'}
	<p>Sending...</p>
{:else if submitStatus === 'failed'}
	<p>⚠️ Sorry, there was a problem sending your message.</p>
	<button class="btn-compose-another" on:click={refreshForm}>Compose another message</button>
{:else if submitStatus === 'success'}
	<p>🎉 Message sent! Thank you.</p>
	<button class="btn-compose-another" on:click={refreshForm}>Compose another message</button>
{:else}
	<form on:submit|preventDefault={submitForm} id="contact">
		<div class="form-name">
			<label for="name">Your name</label>
			<input type="text" name="name" id="name" required />
		</div>
		<div class="form-email">
			<label for="email">Your email address</label>
			<input type="email" name="email" id="email" required />
		</div>
		<div class="form-message">
			<label for="message">Your message</label>
			<textarea name="message" cols="30" rows="5" id="message" required />
		</div>
		<div>
			<input type="submit" value="Send message" />
		</div>
		<div class="post-submit-msg" />
	</form>
{/if}

<style>
	p {
		margin-bottom: 1.5rem;
	}

	/* Reset default input styling */
	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	input[type='text'],
	input[type='email'],
	input[type='submit'],
	.btn-compose-another,
	textarea {
		background-color: #f3f4f6;
		border: 1px solid #5f5260;
		border-radius: 8px;
		width: 100%;
		padding: 0.5rem 0.75rem;
		font-family: 'Open Sans', sans-serif;
		margin-top: 0.5rem;
	}

	input:not([type='submit']) {
		margin-bottom: 1rem;
	}

	label {
		cursor: pointer;
		font-weight: 700;
		font-family: 'Open Sans', sans-serif;
	}

	textarea {
		max-width: 100%;
		min-height: 3rem;
		resize: vertical;
		overflow: auto;
		margin-bottom: 1rem;
	}

	input[type='submit'],
	.btn-compose-another {
		background-color: #ff7f50;
		color: #fff;
		border: none;
		width: auto;
		font-weight: 700;
		cursor: pointer;
	}

	input[type='submit']:hover,
	.btn-compose-another:hover {
		background-color: #ff6933;
		color: #fff;
		border: none;
		width: auto;
		font-weight: 700;
		cursor: pointer;
	}

	@media (min-width: 820px) {
		form {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 1rem;
		}

		.form-name {
			grid-column: 1/2;
		}

		.form-email {
			grid-column: 2/3;
		}

		.form-message {
			grid-column: 1/-1;
		}
	}
</style>
