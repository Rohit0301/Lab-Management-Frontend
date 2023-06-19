import { Box } from "@mui/material";
import moment from "moment";
import { USER_ROLE } from ".";
import { ViewInvoice } from "../components/";
export const LabColumns = [
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

export const PatientColumns = [
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

export const PatientInnerColumns = [
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

export const LabInnerColumns = [
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
		name: "Date & Time",
		key: "bill_created_at",
		render: (data) => moment(data.bill_created_at).format("Do MMMM YY, h:mm A"),
	},
	{
		id: 5,
		name: "View Invoice",
		key: "invoice",
		align: "center",
		render: (data) => data.invoice && <ViewInvoice invoice_id={data.invoice} />,
	},
];

export const getTableSchema = (role) => {
	return {
		columns: role === USER_ROLE ? PatientColumns : LabColumns,
		innerColumns: role === USER_ROLE ? PatientInnerColumns : LabInnerColumns,
	};
};
