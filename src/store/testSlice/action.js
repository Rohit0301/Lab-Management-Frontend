import { createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../utils";
import { FETCH_LAB_TEST_API } from "../../constants/pathConstant";

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
