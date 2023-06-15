import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { logout } from "../../store/authSlice/action";

export default function Navbar() {
	const theme = useTheme();
	const user = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	return (
		<Box
			bgcolor={theme.palette.primary.main}
			sx={{
				// width: "100%",
				padding: "16px 1.5rem",
				display: "flex",
				alignItems: "center",
				flexDirection: "row",
				justifyContent: "space-between",
			}}
		>
			<Typography variant="h5" color="white">
				Live Health
			</Typography>
			{user.isLoggedIn && (
				<Button
					className={styles.auth_btn}
					variant="outlined"
					onClick={() => dispatch(logout(user.session_id))}
				>
					Logout
				</Button>
			)}
		</Box>
	);
}
