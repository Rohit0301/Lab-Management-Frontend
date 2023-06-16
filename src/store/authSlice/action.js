import { createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../utils";
import {
	FETCH_LAB_BY_ID,
	FETCH_SESSION_BY_ID,
	FETCH_USER_BY_ID,
	LAB_LOGIN_API,
	LAB_REGISTER_API,
	SESSION_LOGOUT,
	USER_LOGIN_API,
	USER_REGISTER_API,
} from "../../constants/pathConstant";

export const userRegister = createAsyncThunk("userRegister", async (data) => {
	const response = await Request({
		method: "POST",
		endpoint: USER_REGISTER_API,
		data: data,
	});
	return response.data;
});

export const labRegister = createAsyncThunk("labRegister", async (data) => {
	const response = await Request({
		method: "POST",
		endpoint: LAB_REGISTER_API,
		data: data,
	});

	return response.data;
});

export const userLogin = createAsyncThunk("userLogin", async (data) => {
	const response = await Request({
		method: "POST",
		endpoint: USER_LOGIN_API,
		data: data,
	});

	return response.data;
});

export const laboratoryLogin = createAsyncThunk("labLogin", async (data) => {
	const response = await Request({
		method: "POST",
		endpoint: LAB_LOGIN_API,
		data: data,
	});

	return response.data;
});

export const fetchSession = createAsyncThunk(
	"fetchSession",
	async (_, { getState }) => {
		const response = await Request({
			method: "GET",
			endpoint: FETCH_SESSION_BY_ID,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});

		return response.data;
	}
);

export const fetchUser = createAsyncThunk("fetchUser", async (user_id) => {
	const response = await Request({
		method: "GET",
		endpoint: FETCH_USER_BY_ID + `${user_id}/`,
		session: getState().user.session_id || localStorage.getItem("session_id"),
	});

	return response.data;
});

export const fetchLaboratory = createAsyncThunk(
	"fetchLaboratory",
	async (lab_id, { getState }) => {
		const response = await Request({
			method: "GET",
			endpoint: FETCH_LAB_BY_ID + `${lab_id}/`,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});

		return response.data;
	}
);

export const logout = createAsyncThunk("logout", async (_, { getState }) => {
	const response = await Request({
		method: "POST",
		endpoint: SESSION_LOGOUT,
		session: getState().user.session_id || localStorage.getItem("session_id"),
	});

	return response.data;
});
