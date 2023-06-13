import { createSlice } from "@reduxjs/toolkit";
import { fetchTests } from "./action";

export const testSlice = createSlice({
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
			.addCase(fetchTests.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchTests.fulfilled, (state, action) => {
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

// export const { setPatientRegistrationError } = testSlice.actions;
export default testSlice.reducer;
