import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TAX_RATE = 0.07;

function ccyFormat(num) {
	return `${num.toFixed(2)}`;
}

function createRow(desc, type, price) {
	return { desc, type, price };
}

function subtotal(items) {
	return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
	createRow("Test 1", "Type 1", 200),
	createRow("Test 2", "Type 1", 300),
	createRow("Test 3", "Type 1", 900),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function AssignedTestTable() {
	return (
		<TableContainer>
			<Table sx={{ minWidth: 700 }} aria-label="spanning table">
				<TableHead>
					<TableCell className="bold no-borders">Test Name</TableCell>
					<TableCell className="bold no-borders"> Type</TableCell>
					<TableCell align="right" className="bold no-borders">
						Price
					</TableCell>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.desc}>
							<TableCell className="no-borders">{row.desc}</TableCell>
							<TableCell className="no-borders">{row.type}</TableCell>
							<TableCell align="right" className="no-borders">
								{ccyFormat(row.price)}
							</TableCell>
						</TableRow>
					))}

					<TableRow>
						<TableCell rowSpan={1} className="no-borders" />
						<TableCell className="bold no-borders">Total</TableCell>
						<TableCell align="right" className="no-borders bold">
							{ccyFormat(invoiceTotal)}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
