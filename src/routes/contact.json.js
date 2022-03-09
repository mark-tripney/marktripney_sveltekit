export const post = async ({ request }) => {
	const body = await request.formData();
	const name = body.get('name');
	const email = body.get('email');
	const message = body.get('message');

	const response = await fetch(
		`https://docs.google.com/forms/d/e/1FAIpQLSd5WgjkA7hXPL-_tmvcr9Kh2JBdmdx-S6LKFnqS_xoxpDlfzg/formResponse?usp=pp_url&entry.698525266=${name}&entry.592663058=${email}&entry.1333695399=${message}&submit=Submit`
	);

	if (response.status === 200) {
		return {
			status: 200,
			body: { message: 'success' }
		};
	} else {
		return {
			status: 404,
			body: { message: 'failed' }
		};
	}
};
