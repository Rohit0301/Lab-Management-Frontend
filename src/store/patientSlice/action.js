import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	FETCH_LAB_PATIENT_API,
	MUTATE_LAB_PATIENT_API,
} from "../../constants/pathConstant";
import { Request } from "../../utils";

export const fetchPatient = createAsyncThunk(
	"fetchPatients",
	async (lab_id) => {
		const response = await Request({
			method: "GET",
			endpoint: FETCH_LAB_PATIENT_API + `${lab_id}/`,
		});
		if (response.status === 200) {
			return response.data;
		}
		return [];
	}
);

export const addNewPatient = createAsyncThunk(
	"addNewPatient",
	async (data, patient_id) => {
		const response = await Request({
			method: "POST",
			endpoint: MUTATE_LAB_PATIENT_API + "0/",
			data: data,
		});
		if (response.status === 201) return response.data;
		else
			return {
				...response.data,
				error: true,
			};
	}
);

export const deletePatient = createAsyncThunk(
	"deletePatient",
	async (patient_id) => {
		const response = await Request({
			method: "DELETE",
			endpoint: MUTATE_LAB_PATIENT_API + `${patient_id}/`,
		});
		if (response.status === 204) return patient_id;
	}
);
