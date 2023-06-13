import { Box } from "@mui/material";
import React from "react";
import styles from "../index.module.css";
export default function BillTable() {
	return (
		<Box className={styles.bill_table}>
			<BillHead />
			<BillRow />
			<BillRow />
			<BillRow />
		</Box>
	);
}

export const BillHead = () => {
	return (
		<Box className={styles.bill_row}>
			<Box className="bold">Sr No.</Box>
			<Box className="bold">Bill no</Box>
			<Box className="bold">Test Name</Box>
			<Box className="bold">Price</Box>
			<Box className="bold">Sample Needed</Box>
			<Box className="bold"> Date & Time</Box>
		</Box>
	);
};

export const BillRow = () => {
	return (
		<Box className={styles.bill_row}>
			<Box>1</Box>
			<Box>12</Box>
			<Box>Blood Test</Box>
			<Box>Blood</Box>
			<Box>300</Box>
			<Box>12 june 23, 11:30 AM</Box>
		</Box>
	);
};
