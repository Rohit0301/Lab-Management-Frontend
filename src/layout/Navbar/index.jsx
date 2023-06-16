import React from "react";
import { Avatar, Box, Button, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { logout } from "../../store/authSlice/action";
import { USER_ROLE } from "../../constants";

export default function Navbar() {
	const theme = useTheme();
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const getUserName = () => {
		if (auth.role === USER_ROLE) return auth.user.full_name;
		else return auth.user.name;
	};
	return (
		<Box
			bgcolor={theme.palette.primary.main}
			sx={{
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
			{auth.isLoggedIn && (
				<Box className={styles.container}>
					<Box className={styles.container} style={{ gap: "8px" }}>
						{getUserName() && (
							<Avatar style={{ background: "#e36907" }}>
								{getUserName().charAt(0)}
							</Avatar>
						)}
						<Typography variant="body1" style={{ color: "white" }}>
							{getUserName()}
						</Typography>
					</Box>

					<Button
						className={styles.auth_btn}
						variant="outlined"
						onClick={() => dispatch(logout())}
					>
						Logout
					</Button>
				</Box>
			)}
		</Box>
	);
}
