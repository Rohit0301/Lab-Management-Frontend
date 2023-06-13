import React from "react";
import { useDispatch } from "react-redux";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePatient } from "../../../store/patientSlice/action";

export default function ActionColumn({ data }) {
	const dispatch = useDispatch();

	return (
		<Box style={{ display: "flex", alignItems: "center", gap: "2px" }}>
			<IconButton>
				<EditIcon />
			</IconButton>
			<IconButton onClick={() => dispatch(deletePatient(data.id))}>
				<DeleteIcon />{" "}
			</IconButton>
		</Box>
	);
}
