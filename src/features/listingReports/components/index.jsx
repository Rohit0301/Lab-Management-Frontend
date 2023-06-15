import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ReportTable from "./ReportTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../../../store/userSlice/action";
import moment from "moment";
import { fetchLabReports } from "../../../store/labSlice/action";

const labColumns = [
	{
		id: 1,
		name: "Patient Name",
		key: "patient_name",
	},
	{
		id: 2,
		name: "Email Id",
		key: "patient_email",
	},
	{
		id: 3,
		name: "Bill Numbers",
		key: "bill_name",
		render: (data) => {
			return (
				<Box
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "8px",
					}}
				>
					{data.bill_ids &&
						data.bill_ids.map(
							(item, index) =>
								index < 3 && (
									<small key={index} style={{ fontSize: "15px" }}>
										{item},
									</small>
								)
						)}
				</Box>
			);
		},
	},
	{
		id: 4,
		name: "Test Names",
		key: "test_names",
		render: (data) => {
			return (
				<Box
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "8px",
					}}
				>
					{data.reports &&
						data.reports.map(
							(item, index) =>
								index < 3 && (
									<small key={index} style={{ fontSize: "15px" }}>
										{item?.test_name},
									</small>
								)
						)}
				</Box>
			);
		},
	},
];

const columns = [
	{
		id: 1,
		name: "Bill No",
		key: "bill_no",
	},
	{
		id: 2,
		name: "Bill amount",
		key: "bill_amount",
	},
	{
		id: 3,
		name: "Date & Time",
		key: "bill_created_at",
		render: (data) => moment(data.bill_created_at).format("Do MMMM YY, h:mm A"),
	},
	{
		id: 4,
		name: "Lab Name",
		key: "lab_name",
	},
	{
		id: 5,
		name: "Test Names",
		key: "bill_no",
		render: (data) => {
			return (
				<Box
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: "8px",
					}}
				>
					{data.tests.map(
						(item, index) =>
							index < 3 && (
								<small key={index} style={{ fontSize: "15px" }}>
									{item?.test_name},
								</small>
							)
					)}
				</Box>
			);
		},
	},
];
const innerColumns = [
	{
		id: 1,
		name: "Patient Name",
		key: "patient_name",
	},
	{
		id: 1,
		name: "Age",
		key: "patient_age",
	},
	{
		id: 2,
		name: "Test Name",
		key: "test_name",
	},
	{
		id: 3,
		name: "Test price",
		key: "test_price",
	},
	{
		id: 4,
		name: "Sample Needed",
		key: "test_sample_needed",
	},
];

const labInnerColumns = [
	{
		id: 1,
		name: "Bill No",
		key: "bill_no",
	},
	{
		id: 2,
		name: "Test Name",
		key: "test_name",
	},
	{
		id: 3,
		name: "Test Price",
		key: "test_price",
	},
	{
		id: 4,
		name: "Sample Needed",
		key: "test_sample_needed",
	},
	{
		id: 5,
		name: "Date & Time",
		key: "bill_created_at",
		render: (data) => moment(data.bill_created_at).format("Do MMMM YY, h:mm A"),
	},
];

export default function ListingPatientReport() {
	const dispatch = useDispatch();
	const { user, auth, lab } = useSelector((state) => state);
	useEffect(() => {
		const session_id = auth.session_id || localStorage.getItem("session_id");
		dispatch(
			auth.role === "user"
				? fetchReports(session_id)
				: fetchLabReports(session_id)
		);
	}, []);
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
			<ReportTable
				columns={auth.role === "user" ? columns : labColumns}
				innerColumns={auth.role === "user" ? innerColumns : labInnerColumns}
				data={auth.role === "user" ? user.data : lab.report_data}
				// innerData={auth.role === "user" ? columns : labColumns}
				loading={auth.role === "user" ? user.loading : lab.loading}
				role={auth.role}
			/>
		</Container>
	);
}
