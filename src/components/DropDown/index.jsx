import { Box, ClickAwayListener, Typography } from "@mui/material";
import React from "react";
import styles from "./index.module.css";
export default function DropDown({
	handleCancel,
	searchedResults,
	handleSelectItem,
	columns,
}) {
	return (
		<ClickAwayListener onClickAway={handleCancel}>
			<Box className={styles.searchDropDown}>
				{searchedResults.map((data) => (
					<DropDownItem
						key={data.id}
						columns={columns}
						data={data}
						handleSelectItem={handleSelectItem}
					/>
				))}
			</Box>
		</ClickAwayListener>
	);
}

export const DropDownItem = ({ data, handleSelectItem, columns }) => {
	return (
		<Box className={styles.dropDownItem} onClick={() => handleSelectItem(data)}>
			{columns.map((col) => (
				<Box className={styles.dropDownItem_sec} key={col.id}>
					<Typography variant="body2">{col.label}:</Typography>
					<Typography variant="body2" className="bold">
						{data[col.key]}
					</Typography>
				</Box>
			))}
		</Box>
	);
};
