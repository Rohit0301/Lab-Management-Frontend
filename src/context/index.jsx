import React, { createContext, useState } from "react";
export const globalContext = createContext();
export default function GlobalContext({ children }) {
	const [snackbarData, setSnackBarData] = useState({});
	const [userType, setUserType] = useState("user");

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
				openNotification,
				closeNotification,
				userType,
				handleChangeUserType,
			}}
		>
			{children}
		</globalContext.Provider>
	);
}
