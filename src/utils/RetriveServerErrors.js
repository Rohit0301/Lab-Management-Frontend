export const RetriveServerError = (errors) => {
	let serverError = "";
	let key = "";
	const keys = Object.keys(errors);
	if (keys.length > 0) {
		key = keys[0];
		serverError = errors[keys[0]][0];
	}
	if (!serverError.includes(key)) serverError = key + ", " + serverError;
	return serverError;
};
