import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	FETCH_LAB_PATIENT_API,
	MUTATE_LAB_PATIENT_API,
	SEARCH_PATIENT_BY_EMAIL_ID,
} from "../../constants/pathConstant";
import { Request } from "../../utils";

export const fetchPatient = createAsyncThunk(
	"fetchPatients",
	async (_, { getState }) => {
		const response = await Request({
			method: "GET",
			endpoint: FETCH_LAB_PATIENT_API,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});
		if (response.status === 200) {
			return response.data;
		}
		return [];
	}
);

export const searchPatient = createAsyncThunk(
	"searchPatient",
	async (email_id, { getState }) => {
		const response = await Request({
			method: "GET",
			endpoint: SEARCH_PATIENT_BY_EMAIL_ID + `?email_id=${email_id}`,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});
		if (response.status === 200) {
			return response.data;
		}
		return [];
	}
);

export const addOrUpdateNewPatient = createAsyncThunk(
	"addOrUpdateNewPatient",
	async (payload, { getState }) => {
		const response = await Request({
			method: payload.method,
			endpoint: MUTATE_LAB_PATIENT_API + `${payload?.patient_id | 0}/`,
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

export const deletePatient = createAsyncThunk(
	"deletePatient",
	async (patient_id, { getState }) => {
		const response = await Request({
			method: "DELETE",
			endpoint: MUTATE_LAB_PATIENT_API + `${patient_id}/`,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});
		if (response.status === 200) return patient_id;
	}
);
