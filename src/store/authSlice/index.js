import { createSlice } from "@reduxjs/toolkit";
import { userRegister } from "./action";

export const authSlice = createSlice({
	name: "user",
	initialState: {
		name: "rohit",
		role: "",
		loading: false,
		isLoggedIn: false,
		registerLoading: false,
		user: {},
		state: "",
	},
	reducers: {
		setDefaultValues: (state) => {
			state.status = "";
			state.registerLoading = "";
		},
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
	extraReducers: (builder) => {
		builder
			.addCase(userRegister.pending, (state, action) => {
				state.registerLoading = true;
				state.status = "";
			})
			.addCase(userRegister.fulfilled, (state, action) => {
				if (action.payload) {
					state.status = "success";
				} else {
					state.status = "error";
				}
				state.registerLoading = false;
			});
	},
});

export const { setUser, setLoading, logoutUser, setDefaultValues } =
	authSlice.actions;
export default authSlice.reducer;
