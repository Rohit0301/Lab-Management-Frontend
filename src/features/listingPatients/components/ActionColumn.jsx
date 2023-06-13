import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePatient } from "../../../store/patientSlice/action";
import { useGlobalContext } from "../../../hooks";

export default function ActionColumn({ data }) {
	const dispatch = useDispatch();
	const { deleteStatus } = useSelector((state) => state.patient);
	const { openNotification } = useGlobalContext();
	useEffect(() => {
		if (deleteStatus) {
			openNotification({
				type: "success",
				message: "Patient deleted successfully",
			});
		}
	}, [deleteStatus]);

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
