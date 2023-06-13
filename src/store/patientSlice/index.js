import { createSlice } from "@reduxjs/toolkit";
import { addNewPatient, fetchPatient, deletePatient } from "./action";

export const patientSlice = createSlice({
	name: "patient",
	initialState: {
		data: [],
		loading: false,
		addPatientLoading: false,
		errors: {},
		status: "",
	},
	reducers: {
		setPatientRegistrationError: (state, action) => {
			const key = action.payload;
			const errors = state.errors;
			if (key in errors) delete errors[key];
			state.errors = errors;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPatient.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchPatient.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			})

			.addCase(addNewPatient.pending, (state, action) => {
				state.addPatientLoading = true;
			})
			.addCase(addNewPatient.fulfilled, (state, action) => {
				if (action.payload.error) {
					state.errors = action.payload;
					state.status = "error";
				} else {
					state.status = "success";
				}
				state.addPatientLoading = false;
			})
			.addCase(deletePatient.fulfilled, (state, action) => {
				console.log(action);
				state.data = action.payload;
				state.loading = false;
			});
	},
});

export const { setPatientRegistrationError } = patientSlice.actions;
export default patientSlice.reducer;
