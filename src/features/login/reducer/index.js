export const initialState = {
	data: {
		email_id: "",
		password: "",
	},
	isFormValid: true,
	errors: {},
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "RESET_FEILDS":
			return {
				data: {
					email_id: "",
					password: "",
				},
				isFormValid: true,
			};
		case "SET_DATA":
			return {
				...state,
				data: {
					...state.data,
					[action.key]: action.value,
				},
				errors: {
					...state.errors,
					[action.key]: action.value && "",
				},
			};
		case "SET_EMPTY_FIELD_ERROR":
			let errors = state.errors;
			let data = state.data;
			let isValidData = true;
			Object.keys(data).map((key) => {
				if (!data[key]) {
					errors = {
						...errors,
						[key]: "Required!",
					};
					isValidData = false;
				}
			});
			if (isValidData) {
				action.cb();
			}
			return {
				...state,
				errors: errors,
				isFormValid: isValidData,
			};
		default:
			return state;
	}
};
