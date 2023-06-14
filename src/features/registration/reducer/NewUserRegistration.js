import { EMAIL_REGEX } from "../../../constants/regex";

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
	isFromValid: false,
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
		case "RESET_FEILDS":
			return {
				data: {
					full_name: "",
					name: "",
					email_id: "",
					password: "",
					confirm_password: "",
					address: "",
					phone_no: "",
				},
			};
		case "SET_DATA":
			const { isValid, error_msg } = validateData(
				state,
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
				isFormValid: isValid,
			};
		case "SET_EMPTY_FIELD_ERROR":
			let errors = state.errors;
			let data = state.data;
			let isValidData = true;
			fields[action.value].map((key) => {
				if (!data[key]) {
					errors = {
						...errors,
						[key]: "Required!",
					};
					isValidData = false;
				}
			});
			return {
				...state,
				errors: errors,
				isFormValid: isValidData,
			};
		default:
			return state;
	}
};

const validateData = (state, key, value) => {
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
