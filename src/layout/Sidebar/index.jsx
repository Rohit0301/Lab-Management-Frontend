import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import React from "react";
import { SIDEBAR_MENU } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
	const navigate = useNavigate();
	return (
		<Box sx={{ width: "100%", bgcolor: "#f4f4f4", height: "100%" }}>
			<List>
				{SIDEBAR_MENU.map(({ id, label, path }) => (
					<ListItem key={id}>
						<ListItemButton onClick={() => navigate(path)}>
							<ListItemText primary={label} sx={{ textAlign: "left" }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
}
