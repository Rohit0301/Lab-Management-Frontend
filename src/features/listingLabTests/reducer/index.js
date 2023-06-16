export const initialState = {
	data: {
		name: "",
		test_type: "",
		description: "",
		sample_needed: "",
		price: "",
	},
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_NEW_VALUES":
			const test = action.data;
			return {
				data: {
					name: test?.name,
					test_type: test?.test_type,
					description: test?.description,
					sample_needed: test?.sample_needed,
					price: test?.price,
				},
			};
		case "RESET_FEILDS":
			return initialState;
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
