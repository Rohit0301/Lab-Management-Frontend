import { createAsyncThunk } from "@reduxjs/toolkit";
import { Request } from "../../utils";
import {
	FETCH_LAB_TEST_API,
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
	return {};
});
