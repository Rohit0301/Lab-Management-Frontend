import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
	return (
		<Container component="main" maxWidth="lg">
			<Box
				sx={{
					mt: 3,
					mb: 3,
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					Home
				</Typography>
			</Box>
		</Container>
	);
}
