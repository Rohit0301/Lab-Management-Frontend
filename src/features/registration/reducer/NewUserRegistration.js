import { EMAIL_REGEX } from "../../../constants/regex";
import { initialState } from "../../listingLabTests/reducer";

export const newUserRegistrationInitialState = {
	data: {
		full_name: "",
		name: "",
		email_id: "",
		password: "",
		confirm_password: "",
		address: "",
		phone_no: "",
	},
	errors: {},
};

const fields = {
	user: ["full_name", "email_id", "password", "confirm_password"],
	laboratory: [
		"name",
		"email_id",
		"password",
		"confirm_password",
		"address",
		"phone_no",
	],
};

export const newUserRegistrationReducer = (state, action) => {
	switch (action.type) {
		case "RESET_FIELDS":
			return initialState;
		case "SET_ERROR":
			console.log("enter");
			return {
				...state,
				errors: {
					...state.errors,
					[action.key]: action.value,
				},
			};
		case "SET_DATA":
			const { error_msg } = validateData(
				state,
				action.dispatch,
				action.key,
				action.value
			);
			return {
				...state,
				data: {
					...state.data,
					[action.key]: action.value,
				},
				errors: {
					...state.errors,
					[action.key]: error_msg,
				},
			};
		default:
			return state;
	}
};

export const checkFormValid = (state, dispatch, userType) => {
	let isFormValid = true;
	fields[userType].map((key) => {
		const { isValid, error_msg } = validateData(
			state,
			dispatch,
			key,
			state.data[key]
		);
		if (!isValid) {
			dispatch({
				type: "SET_ERROR",
				key: key,
				value: error_msg,
			});
		}
		isFormValid &= isValid;
	});
	return isFormValid;
};
const validateData = (state, dispatch, key, value) => {
	let isValid = true;
	let error_msg = "";
	if (!value) {
		return {
			isValid: false,
			error_msg: "Required!",
		};
	}
	switch (key) {
		case "email_id":
			if (!value.match(EMAIL_REGEX)) {
				isValid = false;
				error_msg = "Invalid email id";
			}
			break;
		case "password":
			let password_match_message = "";
			if (state.data.confirm_password && value != state.data.confirm_password) {
				password_match_message = "Password doesn't match";
			}

			dispatch({
				type: "SET_ERROR",
				key: "confirm_password",
				value: password_match_message,
			});
			if (value.length < 8) {
				isValid = false;
				error_msg = "length must be greater than 8 characters";
			}
			break;
		case "confirm_password":
			if (value !== state.data.password) {
				isValid = false;
				error_msg = "Password doesn't match";
			}
			break;
		default:
			break;
	}

	return { isValid, error_msg };
};
