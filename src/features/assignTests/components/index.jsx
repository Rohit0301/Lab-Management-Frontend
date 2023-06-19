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
import { DropDown, LoaderButton, ViewInvoice } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce, useGlobalContext } from "../../../hooks";
import { setLabDefaultValues, setLabLoading } from "../../../store/labSlice";
import { createInvoice } from "../../../utils";

export default function AssignTests() {
	const reduxDispatch = useDispatch();
	const { lab, auth } = useSelector((state) => state);
	const [state, dispatch] = useReducer(reducer, initialState);
	const { openNotification } = useGlobalContext();
	const [invoiceId, setInvoiceId] = useState("");
	const { status, loading } = lab;

	useEffect(() => {
		return () => {
			reduxDispatch(setLabDefaultValues());
		};
	}, []);

	useEffect(() => {
		if (status) {
			openNotification({
				type: status,
				message: "Bill generated Successfully",
			});
		}
	}, [status]);

	const handleGenerateBill = async () => {
		reduxDispatch(setLabLoading(true));
		const invoiceData = {
			patient: state.selected_patient,
			lab: auth.user,
			bills: state.bill_details,
		};
		const invoice = await createInvoice(invoiceData);
		setInvoiceId(invoice?.pdf);
		const data = {
			total_amount: state.total_amount,
			patient_id: state.selected_patient?.id,
			test_ids: state.bill_details.map((bill) => bill?.id),
			invoice: invoice?.pdf,
		};
		reduxDispatch(assignTestToPatient(data));
	};

	const handleClear = () => {
		dispatch({
			type: "SET_DEFAULT",
		});
		reduxDispatch(setLabDefaultValues());
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
						{invoiceId && (
							<ViewInvoice invoice_id={invoiceId} buttonText="View Invoice" />
						)}
						<Button variant="outlined" onClick={handleClear}>
							Clear
						</Button>
						{!invoiceId && (
							<LoaderButton
								variant="contained"
								loading={loading}
								onClick={handleGenerateBill}
							>
								Generate Bill
							</LoaderButton>
						)}
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
