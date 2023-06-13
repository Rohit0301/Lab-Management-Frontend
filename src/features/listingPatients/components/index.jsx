import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { CustomTable } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatient } from "../../../store/patientSlice/action";
import { PATIENT_COLUMNS } from "../../../constants";

export default function ListingLabPateints() {
	const lab_id = 4;
	const dispatch = useDispatch();
	const { data, loading } = useSelector((state) => state.patient);
	useEffect(() => {
		if (!data || data.length === 0) dispatch(fetchPatient(lab_id));
	}, []);
	return (
		<Container component="main" maxWidth="lg" style={{ paddingBottom: "8rem" }}>
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
					All Registered Patients
				</Typography>
			</Box>
			<CustomTable data={data} loading={loading} columns={PATIENT_COLUMNS} />
		</Container>
	);
}
