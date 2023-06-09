import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const columns = [
	{
		id: 1,
		label: "Sr No.",
		key: "id",
	},
	{
		id: 2,
		label: "Test Name",
		key: "test_name",
	},
	{
		id: 3,
		label: "Sample Needed",
		key: "sample_needed",
	},
	{
		id: 4,
		label: "Price",
		key: "price",
	},
	{
		id: 5,
		label: "Type",
		key: "type",
	},
	{
		id: 6,
		label: "Description",
		key: "description",
	},
	{
		id: 7,
		label: "Action",
	},
];

const data = [
	{
		id: 1,
		test_name: "Test 1",
		sample_needed: "Sample 1",
		price: 300,
		type: "Type 1",
		description: "Test Description",
	},
	{
		id: 2,
		test_name: "Test 1",
		sample_needed: "Sample 1",
		price: 300,
		type: "Type 1",
		description: "Test Description",
	},
	{
		id: 3,
		test_name: "Test 1",
		sample_needed: "Sample 1",
		price: 300,
		type: "Type 1",
		description: "Test Description",
	},
	{
		id: 4,
		test_name: "Test 1",
		sample_needed: "Sample 1",
		price: 300,
		type: "Type 1",
		description: "Test Description",
	},
	{
		id: 5,
		test_name: "Test 1",
		sample_needed: "Sample 1",
		price: 300,
		type: "Type 1",
		description: "Test Description",
	},
	{
		id: 6,
		test_name: "Test 1",
		sample_needed: "Sample 1",
		price: 300,
		type: "Type 1",
		description: "Test Description",
	},
];

export default function CustomTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						{columns.map((col) => (
							<TableCell key={col.id}>{col.label}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow
							key={row.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							{columns.map((col) => (
								<TableCell key={col.id} component="th" scope="row">
									{row[col?.key]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
