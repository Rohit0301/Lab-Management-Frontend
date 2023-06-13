import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ReportTable from "./ReportTable";

export default function ListingPatientReport() {
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
					List All Reports
				</Typography>
			</Box>
			<ReportTable />
		</Container>
	);
}
