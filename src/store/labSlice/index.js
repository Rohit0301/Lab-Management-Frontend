import { createSlice } from "@reduxjs/toolkit";
import {
	addOrUpdateNewTest,
	deleteTest,
	fetchLabReports,
	fetchTests,
} from "./action";

export const labSlice = createSlice({
	name: "laboratory",
	initialState: {
		test_data: [],
		report_data: [],
		loading: false,
		errors: {},
		status: "",
	},
	reducers: {
		setTestError: (state, action) => {
			if (!action?.payload) {
				state.errors = {};
				return;
			}
			const key = action.payload;
			const errors = state.errors;
			if (key in errors) delete errors[key];
			state.errors = errors;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTests.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchTests.fulfilled, (state, action) => {
				state.test_data = action.payload;
				state.loading = false;
			})
			.addCase(fetchLabReports.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(fetchLabReports.fulfilled, (state, action) => {
				state.report_data = action.payload;
				state.loading = false;
			})
			.addCase(addOrUpdateNewTest.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(addOrUpdateNewTest.fulfilled, (state, action) => {
				if (action.payload?.error) {
					state.errors = action.payload;
					state.status = "error";
				} else {
					// removing existing data and adding updated data to bottom
					let data = state.test_data.filter(
						(item) => item?.id !== action?.payload?.id
					);
					state.status = "success";
					state.test_data = [...data, action.payload];
				}
				state.loading = false;
			})
			.addCase(deleteTest.fulfilled, (state, action) => {
				const newData = state.test_data.filter(
					(item) => item.id != action.payload
				);
				state.test_data = newData;
				state.status = "success";
			});
	},
});

export const { setTestError } = labSlice.actions;
export default labSlice.reducer;
