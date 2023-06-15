import { Box, CircularProgress, useTheme } from "@mui/material";
import React, { useState } from "react";
import styles from "../index.module.css";
import BillTable from "./BillTable";

export default function ReportTable({
	columns,
	innerColumns,
	data,
	loading,
	role,
}) {
	return (
		<Box className={styles.report_table}>
			<TableHead columns={columns} role={role} />
			{loading ? (
				<CircularProgress />
			) : (
				data.map((row) => {
					return (
						<TableRow
							key={row.id}
							data={row}
							role={role}
							columns={columns}
							innerColumns={innerColumns}
						/>
					);
				})
			)}
		</Box>
	);
}

export const TableHead = ({ columns, role }) => {
	return (
		<Box
			className={role === "user" ? styles.report_head : styles.report_head_lab}
		>
			{columns.map((col) => (
				<Box key={col.id} className="bold">
					{col.name}
				</Box>
			))}
			<Box className="bold">Action</Box>
		</Box>
	);
};

export const TableRow = ({ data, columns, innerColumns, role }) => {
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	return (
		<Box>
			<Box
				className={role === "user" ? styles.report_row : styles.report_row_lab}
				style={{
					background: open && theme.palette.primary.main,
					color: open && "#fff",
					borderBottomLeftRadius: open && 0,
					borderBottomRightRadius: open && 0,
				}}
			>
				{columns.map((col) => (
					<Box key={col.id} className="bold">
						{col?.render ? col.render(data) : data[col.key]}
					</Box>
				))}
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
					<BillTable
						data={role == "user" ? data.tests : data.reports}
						columns={innerColumns}
					/>
				</Box>
			)}
		</Box>
	);
};
