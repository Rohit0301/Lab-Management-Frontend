import { createSlice } from "@reduxjs/toolkit";
import {
	addOrUpdateNewPatient,
	fetchPatient,
	deletePatient,
	searchPatient,
} from "./action";

export const patientSlice = createSlice({
	name: "patient",
	initialState: {
		data: [],
		loading: false,
		searchedResults: [],
		errors: {},
		status: "",
		addPatientLoading: false,
		deleteStatus: "",
	},
	reducers: {
		setPatientDefaultValues: (state, action) => {
			state.loading = false;
			state.errors = {};
			state.status = "";
			state.addPatientLoading = false;
			state.deleteStatus = "";
			state.searchedResults = [];
		},
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
			.addCase(searchPatient.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(searchPatient.fulfilled, (state, action) => {
				state.searchedResults = action.payload;
				state.loading = false;
			})
			.addCase(addOrUpdateNewPatient.pending, (state, action) => {
				state.addPatientLoading = true;
			})
			.addCase(addOrUpdateNewPatient.fulfilled, (state, action) => {
				if (action.payload.error) {
					state.errors = action.payload;
					state.status = "error";
				} else {
					state.status = "success";
					let data = state.data.filter(
						(item) => item?.id != action.payload?.id
					);
					state.data = [...data, action.payload];
				}
				state.addPatientLoading = false;
			})
			.addCase(deletePatient.fulfilled, (state, action) => {
				const newData = state.data.filter((item) => item.id != action.payload);
				state.data = newData;
				state.deleteStatus = "success";
			});
	},
});

export const { setPatientRegistrationError, setPatientDefaultValues } =
	patientSlice.actions;
export default patientSlice.reducer;
