import { createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../utils";
import {
	FETCH_LAB_TEST_API,
	FETCH_PATIENT_REPORT,
	MUTATE_LAB_TEST_API,
} from "../../constants/pathConstant";

export const fetchLabReports = createAsyncThunk(
	"fetchLabReports",
	async (session_id) => {
		const response = await Request({
			method: "GET",
			endpoint: FETCH_PATIENT_REPORT,
			session: session_id,
		});
		if (response.status === 200) {
			return response.data;
		}
		return [];
	}
);

export const addOrUpdateNewTest = createAsyncThunk(
	"addOrUpdateNewTest",
	async (payload) => {
		const response = await Request({
			method: payload.method,
			endpoint: MUTATE_LAB_TEST_API + `${payload.test_id | 0}/`,
			data: payload.data,
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

export const fetchTests = createAsyncThunk("fetchTests", async (lab_id) => {
	const response = await Request({
		method: "GET",
		endpoint: FETCH_LAB_TEST_API + `${lab_id}/`,
	});
	if (response.status === 200) {
		return response.data;
	}
	return [];
});

export const deleteTest = createAsyncThunk("deleteTest", async (test_id) => {
	const response = await Request({
		method: "DELETE",
		endpoint: MUTATE_LAB_TEST_API + `${test_id}/`,
	});
	if (response.status === 204) return test_id;
});
