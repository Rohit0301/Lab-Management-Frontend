import { Box } from "@mui/material";
import React from "react";
import styles from "../index.module.css";
export default function BillTable({ data, columns }) {
	return (
		<Box className={styles.bill_table}>
			<BillHead columns={columns} />
			{data.map((row, index) => (
				<BillRow key={index} sr={index + 1} data={row} columns={columns} />
			))}
		</Box>
	);
}

export const BillHead = ({ columns }) => {
	return (
		<Box className={styles.bill_row}>
			<Box className="bold">Sr No.</Box>
			{columns.map((col) => (
				<Box key={col.id} className="bold">
					{col.name}
				</Box>
			))}
		</Box>
	);
};

export const BillRow = ({ data, columns, sr }) => {
	return (
		<Box className={styles.bill_row}>
			<Box>{sr}</Box>
			{columns.map((col) => (
				<Box key={col.id}>{col?.render ? col.render(data) : data[col.key]}</Box>
			))}
		</Box>
	);
};
