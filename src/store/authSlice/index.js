import { createSlice } from "@reduxjs/toolkit";
import {
	fetchLaboratory,
	fetchSession,
	fetchUser,
	laboratoryLogin,
	logout,
	userLogin,
	userRegister,
} from "./action";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		role: "",
		loading: false,
		user: {},
		serverError: "",
		status: "",
		isLoggedIn: localStorage.getItem("session_id") ? true : false,
		session_id: localStorage.getItem("session_id"),
		globalLoader: false,
	},
	reducers: {
		setDefaultValues: (state) => {
			state.status = "";
			state.loading = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(logout.fulfilled, (state, action) => {
				state.status = "";
				state.role = "";
				state.isLoggedIn = false;
				state.user = {};
				localStorage.removeItem("session_id");
			})
			.addCase(userRegister.pending, (state, action) => {
				state.loading = true;
				state.status = "";
			})
			.addCase(userRegister.fulfilled, (state, action) => {
				if (action.payload) {
					state.status = "success";
				} else {
					state.status = "error";
				}
				state.loading = false;
			})
			.addCase(fetchSession.pending, (state, action) => {
				state.globalLoader = true;
			})
			.addCase(fetchSession.fulfilled, (state, action) => {
				if (action?.payload?.role) {
					state.role = action?.payload?.role;
					state.user = {
						id: action?.payload?.user_id,
					};
				} else {
					state.status = "";
					state.role = "";
					state.isLoggedIn = false;
					state.globalLoader = false;
					state.user = {};
					localStorage.removeItem("session_id");
				}
			})
			.addCase(fetchSession.rejected, (state, action) => {
				state.globalLoader = false;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.role = "user";
				state.globalLoader = false;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.globalLoader = false;
			})
			.addCase(fetchLaboratory.fulfilled, (state, action) => {
				state.user = action.payload;
				state.role = "laboratory";
				state.globalLoader = false;
			})
			.addCase(fetchLaboratory.rejected, (state, action) => {
				state.globalLoader = false;
			})
			.addCase(userLogin.pending, (state, action) => {
				state.loading = true;
				state.status = "";
			})
			.addCase(userLogin.fulfilled, (state, action) => {
				if (action.payload?.id) {
					state.status = "success";
					state.role = "user";
					state.user = action.payload;
					state.isLoggedIn = true;
					localStorage.setItem("session_id", action.payload.session_id);
				} else {
					state.status = "error";
					state.serverError = action.payload.detail;
				}
				state.loading = false;
			})
			.addCase(laboratoryLogin.pending, (state, action) => {
				state.loading = true;
				state.status = "";
			})
			.addCase(laboratoryLogin.fulfilled, (state, action) => {
				if (action.payload?.id) {
					state.status = "success";
					state.role = "laboratory";
					state.user = action.payload;
					state.isLoggedIn = true;
					localStorage.setItem("session_id", action.payload.session_id);
				} else {
					state.status = "error";
					state.serverError = action.payload.detail;
				}
				state.loading = false;
			});
	},
});

export const { setDefaultValues } = authSlice.actions;
export default authSlice.reducer;
