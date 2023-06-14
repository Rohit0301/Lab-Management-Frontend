import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import patientSlice from "./patientSlice";
import testSlice from "./testSlice";
export default configureStore({
	reducer: {
		auth: authSlice,
		patient: patientSlice,
		test: testSlice,
	},
});
