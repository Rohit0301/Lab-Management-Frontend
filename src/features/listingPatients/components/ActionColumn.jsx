import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletePatient } from "../../../store/patientSlice/action";
import { useGlobalContext } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { NEW_PATIENT } from "../../../constants/routes";

export default function PatientActionColumn({ data }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { deleteStatus } = useSelector((state) => state.patient);
	const { openNotification, handleEditPatient } = useGlobalContext();
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
			<IconButton
				onClick={() => {
					handleEditPatient(true, data);
					navigate(NEW_PATIENT);
				}}
			>
				<EditIcon />
			</IconButton>
			<IconButton onClick={() => dispatch(deletePatient(data.id))}>
				<DeleteIcon />{" "}
			</IconButton>
		</Box>
	);
}
