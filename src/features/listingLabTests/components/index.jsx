import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import AddTestModal from "./addTestModal";
import { CustomTable } from "../../../components";

export default function ListingLabTest() {
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
					All Available Test
				</Typography>
				<AddTestModal />
			</Box>
			<CustomTable />
		</Container>
	);
}
