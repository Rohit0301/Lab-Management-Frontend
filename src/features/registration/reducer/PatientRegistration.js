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
		case "SET_NEW_VALUES":
			const patient = action.data;
			return {
				data: {
					first_name: patient?.first_name,
					last_name: patient?.last_name,
					gender: patient?.gender,
					age: patient?.age,
					email_id: patient?.email_id,
					address: patient?.address,
					phone_no: patient?.phone_no,
				},
			};
		case "RESET_FEILDS":
			return patientRegistrationInitialState;
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
