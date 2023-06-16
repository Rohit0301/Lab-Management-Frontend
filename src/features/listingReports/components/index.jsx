import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ReportTable from "./ReportTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../../../store/userSlice/action";
import { fetchLabReports } from "../../../store/labSlice/action";
import { getTableSchema } from "../../../constants/report";

export default function ListingPatientReport() {
	const dispatch = useDispatch();
	const { user, auth, lab } = useSelector((state) => state);
	useEffect(() => {
		dispatch(auth.role === "user" ? fetchReports() : fetchLabReports());
	}, []);
	const schema = getTableSchema(auth.role);
	return (
		<Container component="main" maxWidth="lg" sx={{ paddingBottom: "8rem" }}>
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
			<ReportTable
				columns={schema["columns"]}
				innerColumns={schema["innerColumns"]}
				data={auth.role === "user" ? user.data : lab.report_data}
				loading={auth.role === "user" ? user.loading : lab.loading}
				role={auth.role}
			/>
		</Container>
	);
}
