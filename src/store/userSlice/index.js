import { createSlice } from "@reduxjs/toolkit";
import { fetchReports } from "./action";
import { logout } from "../authSlice/action";

export const userSlice = createSlice({
	name: "patient",
	initialState: {
		data: [],
		loading: false,
		errors: {},
		status: "",
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchReports.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchReports.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
			});

		// .addCase(addNewPatient.pending, (state, action) => {
		// 	state.addPatientLoading = true;
		// })
		// .addCase(addNewPatient.fulfilled, (state, action) => {
		// 	if (action.payload.error) {
		// 		state.errors = action.payload;
		// 		state.status = "error";
		// 	} else {
		// 		state.status = "success";
		// 	}
		// 	state.addPatientLoading = false;
		// })
		// .addCase(deletePatient.fulfilled, (state, action) => {
		// 	const newData = state.data.filter((item) => item.id != action.payload);
		// 	state.data = newData;
		// 	state.deleteStatus = "success";
		// });
	},
});

// export const { setPatientRegistrationError } = userSlice.actions;
export default userSlice.reducer;
