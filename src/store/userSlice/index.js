import { createSlice } from "@reduxjs/toolkit";
import { fetchReports } from "./action";

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
	},
});

export default userSlice.reducer;
