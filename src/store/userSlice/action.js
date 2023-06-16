import { createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../utils";
import { FETCH_USER_REPORTS } from "../../constants/pathConstant";

export const fetchReports = createAsyncThunk(
	"fetchReports",
	async (_, { getState }) => {
		const response = await Request({
			method: "GET",
			endpoint: FETCH_USER_REPORTS,
			session: getState().user.session_id || localStorage.getItem("session_id"),
		});
		if (response.status === 200) {
			return response.data;
		}
		return [];
	}
);
