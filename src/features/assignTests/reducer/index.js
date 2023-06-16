export const initialState = {
	selected_patient: null,
	bill_details: [],
	total_amount: 0,
	error: "",
};
export const reducer = (state, action) => {
	switch (action.type) {
		case "SET_DEFAULT":
			return {
				...state,
				selected_patient: null,
				bill_details: [],
				total_amount: 0,
				error: "",
			};
		case "SET_DEFAULT_ERROR":
			return {
				...state,
				error: "",
			};
		case "SELECT_PATIENT":
			return {
				...state,
				selected_patient: action.data,
			};
		case "ADD_TO_BILL":
			const index = state.bill_details.findIndex(
				(item) => item?.id == action.data?.id
			);
			if (index < 0)
				return {
					...state,
					bill_details: [...state.bill_details, action.data],
					total_amount: state.total_amount + action.data.price,
				};
			else
				return {
					...state,
					error: "Test already added",
				};
		default:
			return state;
	}
};
