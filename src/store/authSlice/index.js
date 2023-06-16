import { createSlice } from "@reduxjs/toolkit";
import {
	fetchLaboratory,
	fetchSession,
	fetchUser,
	labRegister,
	laboratoryLogin,
	logout,
	userLogin,
	userRegister,
} from "./action";
import { RetriveServerError } from "../../utils/RetriveServerErrors";
import { LABORATORY_ROLE, USER_ROLE } from "../../constants";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		role: "",
		loading: false,
		user: {},
		serverError: "",
		status: "",
		registeredStatus: "",
		isLoggedIn: localStorage.getItem("session_id") ? true : false,
		session_id: localStorage.getItem("session_id"),
		globalLoader: false,
	},
	reducers: {
		setDefaultValues: (state) => {
			state.status = "";
			state.loading = false;
			state.serverError = "";
			state.registeredStatus = "";
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
				state.registeredStatus = "";
			})
			.addCase(userRegister.fulfilled, (state, action) => {
				if (action.payload?.id) {
					state.registeredStatus = "success";
				} else {
					state.registeredStatus = "error";
					state.serverError = RetriveServerError(action.payload);
				}
				state.loading = false;
			})
			.addCase(labRegister.pending, (state, action) => {
				state.loading = true;
				state.status = "";
			})
			.addCase(labRegister.fulfilled, (state, action) => {
				if (action.payload?.id) {
					state.status = "success";
				} else {
					state.status = "error";
					state.serverError = RetriveServerError(action.payload);
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
				state.role = USER_ROLE;
				state.globalLoader = false;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.globalLoader = false;
			})
			.addCase(fetchLaboratory.fulfilled, (state, action) => {
				state.user = action.payload;
				state.role = LABORATORY_ROLE;
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
					state.role = USER_ROLE;
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
					state.role = LABORATORY_ROLE;
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
