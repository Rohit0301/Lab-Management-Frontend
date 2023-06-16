import {
	Box,
	ClickAwayListener,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchPatient } from "../../../store/patientSlice/action";
import { useDebounce } from "../../../hooks";
import { DropDown } from "../../../components";

export default function SearchPatient({ state, dispatch }) {
	const [searchEmail, setSearchEmail] = useState("");
	const reduxDispatch = useDispatch();
	const { searchedResults } = useSelector((state) => state.patient);

	const handleSearchChange = (e) => {
		setSearchEmail(e.target.value);
	};

	const debouncedSearchEmail = useDebounce(searchEmail, 600);

	useEffect(() => {
		if (debouncedSearchEmail)
			reduxDispatch(searchPatient(debouncedSearchEmail));
	}, [debouncedSearchEmail]);

	const handleCancel = () => {
		setSearchEmail("");
	};

	const handleSelectPatient = (data) => {
		handleCancel();
		dispatch({ type: "SELECT_PATIENT", data: data });
	};

	return (
		<Box sx={{ width: "100%", mt: 4, position: "relative" }}>
			<Box>
				<TextField
					onChange={handleSearchChange}
					value={searchEmail}
					className={styles.search_input}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
					fullWidth
					placeholder="Search patient by email id"
				/>
			</Box>
			{searchEmail && (
				<DropDown
					searchedResults={searchedResults}
					handleCancel={handleCancel}
					handleSelectItem={handleSelectPatient}
					columns={[
						{ id: 1, label: "Patient Name", key: "patient_name" },
						{ id: 2, label: "Email Id", key: "email_id" },
					]}
				/>
			)}

			{state.selected_patient && (
				<Box className={styles.patient_details}>
					<Typography variant="body1">Patient Full Name: </Typography>
					<Typography variant="h6" className="bold">
						{state.selected_patient.patient_name}
					</Typography>
				</Box>
			)}
		</Box>
	);
}
