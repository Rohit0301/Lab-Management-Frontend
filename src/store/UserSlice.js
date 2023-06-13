import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		name: "rohit",
		role: "laboratory",
		loading: false,
		isLoggedIn: true,
	},
	reducers: {
		logoutUser: (state) => {
			state.isLoggedIn = false;
			state.role = "";
		},
		setUser: (state) => {
			state.user = user;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const { setUser, setLoading, logoutUser } = userSlice.actions;
export default userSlice.reducer;
