import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import React from "react";
import { SIDEBAR_MENU } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";

export default function Sidebar() {
	const navigate = useNavigate();
	const theme = useTheme();
	const user = useSelector((state) => state.user);
	const { pathname } = useLocation();

	return (
		<Box sx={{ width: "100%", bgcolor: "#f4f4f4", height: "100%" }}>
			<List>
				{SIDEBAR_MENU.map(
					({ id, label, path, accessRoles }) =>
						accessRoles.includes(user?.role) && (
							<ListItem
								key={id}
								style={{
									background: pathname === path && theme.palette.primary.main,
									color: pathname === path && "#fff",
								}}
							>
								<ListItemButton onClick={() => navigate(path)}>
									<ListItemText primary={label} sx={{ textAlign: "left" }} />
								</ListItemButton>
							</ListItem>
						)
				)}
			</List>
		</Box>
	);
}
