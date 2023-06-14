export const patientRegistrationInitialState = {
	data: {
		first_name: "",
		last_name: "",
		gender: "",
		age: "",
		email_id: "",
		address: "",
		phone_no: "",
	},
};

export const patientRegistrationReducer = (state, action) => {
	switch (action.type) {
		case "RESET_FEILDS":
			return {
				data: {
					first_name: "",
					last_name: "",
					gender: "",
					age: "",
					email_id: "",
					address: "",
					phone_no: "",
				},
			};
		case "SET_DATA":
			return {
				...state,
				data: {
					...state.data,
					[action.key]: action.value,
				},
			};
		default:
			return state;
	}
};
