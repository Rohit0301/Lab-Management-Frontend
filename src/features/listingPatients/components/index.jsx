import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { CustomTable } from "../../../components";

export default function ListingLabPateints() {
	return (
		<Container component="main" maxWidth="md">
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
					All Registered Pateints
				</Typography>
			</Box>
			<CustomTable />
		</Container>
	);
}
