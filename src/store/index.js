import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import patientSlice from "./patientSlice";
import userSlice from "./userSlice";
import labSlice from "./labSlice";
export default configureStore({
	reducer: {
		auth: authSlice,
		patient: patientSlice,
		user: userSlice,
		lab: labSlice,
	},
});
