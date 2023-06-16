import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ComponentLoader from "../ComponentLoader";

export default function CustomTable({ data, loading, columns }) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<CustomTableHead columns={columns} />
				<CustomTableBody data={data} loading={loading} columns={columns} />
			</Table>
		</TableContainer>
	);
}

const CustomTableHead = ({ columns }) => {
	return (
		<TableHead>
			<TableRow>
				<TableCell align="center" key="sr-head">
					Sr No.
				</TableCell>
				{columns.map((col) => (
					<TableCell align={col?.align} key={col.id}>
						{col.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

const CustomTableBody = ({ data, columns, loading }) => {
	return (
		<TableBody>
			<ComponentLoader loading={loading}>
				{data.map((row, index) => (
					<TableRow
						key={row.id}
						sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
					>
						<TableCell align="center" key="sr-no" component="th" scope="row">
							{index + 1}
						</TableCell>
						{columns.map((col) => (
							<TableCell
								align={col?.align}
								key={col.id}
								component="th"
								scope="row"
							>
								{col.render ? col.render(row) : row[col?.key]}
							</TableCell>
						))}
					</TableRow>
				))}
			</ComponentLoader>
		</TableBody>
	);
};
