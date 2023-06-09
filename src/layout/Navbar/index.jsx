import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Navbar() {
	const theme = useTheme();
	return (
		<Box
			bgcolor={theme.palette.primary.main}
			sx={{ width: "100%", padding: "16px 1.5rem" }}
		>
			<Typography variant="h5" color="white">
				Live Health
			</Typography>
		</Box>
	);
}
