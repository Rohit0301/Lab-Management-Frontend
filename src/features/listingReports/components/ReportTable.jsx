import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";
import styles from "../index.module.css";
import BillTable from "./BillTable";

export default function ReportTable() {
	return (
		<Box className={styles.report_table}>
			<TableHead />
			<TableRow />
			<TableRow />
			<TableRow />
			<TableRow />
			<TableRow />
			<TableRow />
		</Box>
	);
}

export const TableHead = () => {
	return (
		<Box className={styles.report_head}>
			<Box className="bold">Sr No.</Box>
			<Box className="bold">Patient Name</Box>
			<Box className="bold">Bill No.</Box>
			<Box className="bold">Test Names</Box>
			<Box className="bold">Action</Box>
		</Box>
	);
};

export const TableRow = () => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	return (
		<Box>
			<Box
				className={styles.report_row}
				style={{
					background: open && theme.palette.primary.main,
					color: open && "#fff",
					borderBottomLeftRadius: open && 0,
					borderBottomRightRadius: open && 0,
				}}
			>
				<Box>1</Box>
				<Box className="bold">Rohit Jain</Box>
				<Box>12, 23</Box>
				<Box>Blood test, Sugar test</Box>
				<Box
					style={{
						color: !open && theme.palette.primary.main,
						cursor: "pointer",
					}}
					onClick={() => setOpen(!open)}
				>
					View {open ? "Less" : "More"}
				</Box>
			</Box>
			{open && (
				<Box
					style={{
						padding: "16px 0",
						background: "rgb(17 106 123 / 16%)",
						borderBottomLeftRadius: "4px",
						borderBottomRightRadius: "4px",
					}}
				>
					<BillTable />
				</Box>
			)}
		</Box>
	);
};
