import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useGlobalContext } from "../../hooks";

export default function CustomSnackbar() {
	const { snackbarData, closeNotification } = useGlobalContext();
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		closeNotification();
	};

	return (
		<Snackbar
			open={snackbarData?.open}
			autoHideDuration={3000}
			onClose={handleClose}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
		>
			<Alert
				onClose={handleClose}
				severity={snackbarData?.type}
				sx={{ width: "100%" }}
			>
				{snackbarData?.message}
			</Alert>
		</Snackbar>
	);
}
