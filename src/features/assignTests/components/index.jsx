import {
	Button,
	TextField,
	Box,
	Typography,
	Container,
	Grid,
	Divider,
} from "@mui/material";
import styles from "../index.module.css";
import AssignedTestTable from "./AssignedTestTable";
import SearchPatient from "./SearchPatient";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../reducer";
import {
	assignTestToPatient,
	searchLabTest,
} from "../../../store/labSlice/action";
import { DropDown } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce, useGlobalContext } from "../../../hooks";
import { setLabDefaultValues } from "../../../store/labSlice";

export default function AssignTests() {
	const reduxDispatch = useDispatch();
	const { status } = useSelector((state) => state.lab);
	const [state, dispatch] = useReducer(reducer, initialState);
	const { openNotification } = useGlobalContext();

	useEffect(() => {
		if (status) {
			openNotification({
				type: status,
				message: "Bill generated Successfully",
			});
			dispatch({
				type: "SET_DEFAULT",
			});
			reduxDispatch(setLabDefaultValues());
		}
	}, [status]);

	const handleGenerateBill = () => {
		const data = {
			total_amount: state.total_amount,
			patient_id: state.selected_patient?.id,
			test_ids: state.bill_details.map((bill) => bill?.id),
		};
		reduxDispatch(assignTestToPatient(data));
	};

	return (
		<Container component="main" maxWidth="md">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					Assign test to patients
				</Typography>
				<SearchPatient state={state} dispatch={dispatch} />
				{state.selected_patient && (
					<AssignTestForm state={state} dispatch={dispatch} />
				)}
			</Box>
			{state.bill_details.length > 0 && (
				<>
					<Divider sx={{ mt: 2, mb: 2 }} />
					<AssignedTestTable
						data={state.bill_details}
						totalAmount={state.total_amount}
					/>
					<Box className="btn_container">
						<Button variant="contained" onClick={handleGenerateBill}>
							Generate Bill
						</Button>
					</Box>
				</>
			)}
		</Container>
	);
}

const AssignTestForm = ({ state, dispatch }) => {
	const [searchTest, setSearchTest] = useState("");
	const reduxDispatch = useDispatch();
	const { searchedResults } = useSelector((state) => state.lab);
	const { openNotification } = useGlobalContext();
	const handleSearchChange = (e) => {
		setSearchTest(e.target.value);
	};

	useEffect(() => {
		if (state.error) {
			openNotification({
				type: "error",
				message: state.error,
			});
			dispatch({
				type: "SET_DEFAULT_ERROR",
			});
		}
	}, [state.error]);

	const debouncedSearchTest = useDebounce(searchTest, 600);

	useEffect(() => {
		if (debouncedSearchTest) reduxDispatch(searchLabTest(debouncedSearchTest));
	}, [debouncedSearchTest]);

	const handleCancel = () => {
		setSearchTest("");
	};

	const handleSelectTest = (data) => {
		dispatch({
			type: "ADD_TO_BILL",
			data: data,
		});
		handleCancel();
	};

	return (
		<Box
			component="form"
			noValidate
			sx={{ mt: 1, width: "100%" }}
			autoComplete="off"
		>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={8} lg={9} style={{ position: "relative" }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="name"
						label="Test Name"
						name="name"
						className={styles.input_field}
						onChange={handleSearchChange}
						value={searchTest}
						autoFocus
					/>
					{searchTest && (
						<DropDown
							searchedResults={searchedResults}
							handleCancel={handleCancel}
							handleSelectItem={handleSelectTest}
							columns={[
								{ id: 1, label: "Test Name", key: "test_name" },
								{ id: 2, label: "Price", key: "price" },
							]}
						/>
					)}
				</Grid>
			</Grid>
		</Box>
	);
};
