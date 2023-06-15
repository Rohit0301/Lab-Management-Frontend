import { createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../utils";
import {
	FETCH_LAB_BY_ID,
	FETCH_SESSION_BY_ID,
	FETCH_USER_BY_ID,
	LAB_LOGIN_API,
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
	if (response.status === 201) {
		return response.data;
	}
	return;
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
	async (session_id) => {
		const response = await Request({
			method: "GET",
			endpoint: FETCH_SESSION_BY_ID,
			session: session_id,
		});

		return response.data;
	}
);

export const fetchUser = createAsyncThunk("fetchUser", async (user_id) => {
	const response = await Request({
		method: "GET",
		endpoint: FETCH_USER_BY_ID + `${user_id}/`,
	});

	return response.data;
});

export const fetchLaboratory = createAsyncThunk(
	"fetchLaboratory",
	async (lab_id) => {
		const response = await Request({
			method: "GET",
			endpoint: FETCH_LAB_BY_ID + `${lab_id}/`,
		});

		return response.data;
	}
);

export const logout = createAsyncThunk("logout", async (session_id) => {
	const response = await Request({
		method: "POST",
		endpoint: SESSION_LOGOUT,
		session: session_id || localStorage.getItem("session_id"),
	});

	return response.data;
});
