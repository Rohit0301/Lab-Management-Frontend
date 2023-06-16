import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGlobalContext } from "../../../hooks";
import { deleteTest } from "../../../store/labSlice/action";

export default function LabActionColumn({ data }) {
	const dispatch = useDispatch();

	const { deleteStatus } = useSelector((state) => state.lab);
	const { openNotification, handleEditTest } = useGlobalContext();
	useEffect(() => {
		if (deleteStatus) {
			openNotification({
				type: "success",
				message: "Test deleted successfully",
			});
		}
	}, [deleteStatus]);

	return (
		<Box style={{ display: "flex", alignItems: "center", gap: "2px" }}>
			<IconButton onClick={() => handleEditTest(true, data)}>
				<EditIcon />
			</IconButton>
			<IconButton onClick={() => dispatch(deleteTest(data.id))}>
				<DeleteIcon />{" "}
			</IconButton>
		</Box>
	);
}
