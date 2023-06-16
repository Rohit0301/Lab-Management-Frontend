import { createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../utils";
import {
	ASSIGN_TEST_TO_PATIENT,
	FETCH_LAB_TEST_API,
	FETCH_PATIENT_REPORT,
	MUTATE_LAB_TEST_API,
	SEARCH_TEST_BY_NAME,
} from "../../constants/pathConstant";

export const fetchLabReports = createAsyncThunk(
	"fetchLabReports",
	async (_, { getState }) => {
		const response = await Request({
			method: "GET",
			endpoint: FETCH_PATIENT_REPORT,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});
		if (response.status === 200) {
			return response.data;
		}
		return [];
	}
);

export const addOrUpdateNewTest = createAsyncThunk(
	"addOrUpdateNewTest",
	async (payload, { getState }) => {
		const response = await Request({
			method: payload.method,
			endpoint: MUTATE_LAB_TEST_API + `${payload.test_id | 0}/`,
			data: payload.data,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});
		if (response.status === 201 || response.status === 200)
			return response.data;
		else
			return {
				...response.data,
				error: true,
			};
	}
);

export const fetchTests = createAsyncThunk(
	"fetchTests",
	async (_, { getState }) => {
		const response = await Request({
			method: "GET",
			endpoint: FETCH_LAB_TEST_API,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});
		if (response.status === 200) {
			return response.data;
		}
		return [];
	}
);

export const deleteTest = createAsyncThunk(
	"deleteTest",
	async (test_id, { getState }) => {
		const response = await Request({
			method: "DELETE",
			endpoint: MUTATE_LAB_TEST_API + `${test_id}/`,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});
		if (response.status === 200) return test_id;
	}
);

export const searchLabTest = createAsyncThunk(
	"searchTest",
	async (test_name, { getState }) => {
		const response = await Request({
			method: "GET",
			endpoint: SEARCH_TEST_BY_NAME + `?name=${test_name}`,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});
		if (response.status === 200) {
			return response.data;
		}
		return [];
	}
);

export const assignTestToPatient = createAsyncThunk(
	"assignTestToPatient",
	async (data, { getState }) => {
		const response = await Request({
			method: "POST",
			endpoint: ASSIGN_TEST_TO_PATIENT,
			data: data,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});
		if (response.status === 201 || response.status === 200)
			return response.data;
		else
			return {
				...response.data,
				error: true,
			};
	}
);
