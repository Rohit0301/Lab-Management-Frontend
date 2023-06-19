import React, { createContext, useState } from "react";
import { USER_ROLE } from "../constants";
export const globalContext = createContext();
export default function GlobalContext({ children }) {
	const [snackbarData, setSnackBarData] = useState({});
	const [userType, setUserType] = useState(USER_ROLE);
	const [testData, setTestData] = useState();
	const [isTestEditing, setIsTestEditing] = useState(false);
	const [patientData, setPatienData] = useState();
	const [isPatientEditing, setIsPatientEditing] = useState(false);

	const handleEditTest = (isEditing, data) => {
		setIsTestEditing(isEditing);
		setTestData(data);
	};

	const handleEditPatient = (isEditing, data) => {
		setIsPatientEditing(isEditing);
		setPatienData(data);
	};
	const handleChangeUserType = (value) => {
		setUserType(value);
	};
	const openNotification = ({ type, message }) => {
		setSnackBarData({ type, message, open: true });
	};
	const closeNotification = () => {
		setSnackBarData({});
	};
	return (
		<globalContext.Provider
			value={{
				snackbarData,
				userType,
				testData,
				isTestEditing,
				isPatientEditing,
				patientData,
				openNotification,
				closeNotification,
				handleChangeUserType,
				handleEditTest,
				handleEditPatient,
			}}
		>
			{children}
		</globalContext.Provider>
	);
}
