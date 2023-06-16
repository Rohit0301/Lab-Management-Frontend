import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function AssignedTestTable({ data, totalAmount }) {
	return (
		<TableContainer>
			<Table sx={{ minWidth: 700 }} aria-label="spanning table">
				<TableHead>
					<TableCell className="bold no-borders">Test Name</TableCell>
					<TableCell className="bold no-borders">Sample Needed</TableCell>
					<TableCell className="bold no-borders">Test Type</TableCell>
					<TableCell align="right" className="bold no-borders">
						Price
					</TableCell>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow key={row.id}>
							<TableCell className="no-borders">{row.test_name}</TableCell>
							<TableCell className="no-borders">{row.sample_needed}</TableCell>
							<TableCell className="no-borders">{row.test_type}</TableCell>
							<TableCell align="right" className="no-borders">
								Rs. {row.price}
							</TableCell>
						</TableRow>
					))}

					<TableRow>
						<TableCell colSpan={2} className="no-borders" />
						<TableCell className="bold no-borders">Total</TableCell>
						<TableCell align="right" className="no-borders bold">
							Rs. {totalAmount}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
