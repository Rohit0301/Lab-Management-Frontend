import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import patientSlice from "./patientSlice";
import testSlice from "./testSlice";
export default configureStore({
	reducer: {
		user: userSlice,
		patient: patientSlice,
		test: testSlice,
	},
});
