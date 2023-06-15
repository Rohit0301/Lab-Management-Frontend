import {
	Button,
	TextField,
	Box,
	Typography,
	Container,
	Grid,
	RadioGroup,
	FormControlLabel,
	Radio,
	FormLabel,
	CircularProgress,
} from "@mui/material";
import styles from "../index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addOrUpdateNewPatient } from "../../../store/patientSlice/action";
import { useEffect, useReducer } from "react";

import { useGlobalContext } from "../../../hooks";
import {
	setPatientDefaultValues,
	setPatientRegistrationError,
} from "../../../store/patientSlice";
import {
	patientRegistrationInitialState as initialState,
	patientRegistrationReducer as reducer,
} from "../reducer";

export default function PateintRegistration() {
	const reduxDispatch = useDispatch();
	const [state, dispatch] = useReducer(reducer, initialState);
	const { openNotification, isPatientEditing, patientData } =
		useGlobalContext();
	const { patient, user } = useSelector((state) => state);
	const { loading, errors, status } = patient;
	const { data } = state;

	useEffect(() => {
		if (isPatientEditing)
			dispatch({
				type: "SET_NEW_VALUES",
				data: patientData,
			});
	}, [isPatientEditing]);

	useEffect(() => {
		if (status) {
			openNotification({
				type: status,
				message:
					status === "error"
						? "Something went wrong"
						: isPatientEditing
						? "Patient updated successfully"
						: "New patient added successfully !",
			});
			if (status === "success") {
				dispatch({
					type: "RESET_FEILDS",
				});
			}
			reduxDispatch(setPatientDefaultValues());
		}
	}, [status]);

	const handleSubmit = (e) => {
		e.preventDefault();
		reduxDispatch(
			addOrUpdateNewPatient({
				data: { ...state.data, lab: user?.id },
				method: isPatientEditing ? "PATCH" : "POST",
				patient_id: patientData?.id,
			})
		);
	};

	const handleChange = (e) => {
		reduxDispatch(setPatientRegistrationError(e.target.name));
		dispatch({
			type: "SET_DATA",
			key: e.target.name,
			value: e.target.value,
		});
	};
	return (
		<Container component="main" maxWidth="sm" style={{ paddingBottom: "8rem" }}>
			<Box
				sx={{
					mt: 2,
					mb: 2,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					{isPatientEditing ? "Update Patient Details" : "Add New Patient"}
				</Typography>
				<Box
					component="form"
					noValidate
					onSubmit={handleSubmit}
					sx={{ mt: 1 }}
					autoComplete="off"
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								margin="normal"
								required
								fullWidth
								error={errors?.first_name ? true : false}
								helperText={errors?.first_name && errors.first_name[0]}
								onChange={handleChange}
								value={data["first_name"]}
								id="first_name"
								label="First Name"
								name="first_name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								margin="normal"
								required
								fullWidth
								onChange={handleChange}
								value={data["last_name"]}
								id="last_name"
								label="Last Name"
								name="last_name"
								autoFocus
								error={errors?.last_name ? true : false}
								helperText={errors?.last_name && errors.last_name[0]}
							/>
						</Grid>

						<Grid item xs={12} className={styles.gender_container}>
							<FormLabel id="gender">Gender</FormLabel>
							<RadioGroup
								aria-labelledby="gender"
								defaultValue="Male"
								name="gender"
								className={styles.gender_controls}
								error={errors?.gender ? true : false}
								helperText={errors?.gender && errors.gender[0]}
								onChange={handleChange}
								value={data["gender"]}
							>
								<FormControlLabel
									value="Male"
									key="Male"
									control={<Radio />}
									label="Male"
								/>
								<FormControlLabel
									value="Female"
									key="Female"
									control={<Radio />}
									label="Female"
								/>
							</RadioGroup>
						</Grid>
						<Grid item xs={12}>
							<TextField
								margin="normal"
								required
								fullWidth
								onChange={handleChange}
								value={data["age"]}
								id="age"
								label="Age (in years)"
								name="age"
								autoFocus
								error={errors?.age ? true : false}
								helperText={errors?.age && errors.age[0]}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								margin="normal"
								required
								fullWidth
								onChange={handleChange}
								value={data["email_id"]}
								id="email_id"
								label="Email Address"
								name="email_id"
								autoFocus
								error={errors?.email_id ? true : false}
								helperText={errors?.email_id && errors.email_id[0]}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								margin="normal"
								required
								fullWidth
								onChange={handleChange}
								name="phone_no"
								value={data["phone_no"]}
								label="Phone Number"
								type="text"
								id="phone_no"
								error={errors?.phone_no ? true : false}
								helperText={errors?.phone_no && errors.phone_no[0]}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								margin="normal"
								required
								fullWidth
								onChange={handleChange}
								value={data["address"]}
								multiline
								rows={3}
								name="address"
								label="Address"
								type="text"
								id="address"
								error={errors?.address ? true : false}
								helperText={errors?.address && errors.address[0]}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								disabled={loading}
								sx={{ mt: 3, mb: 2, p: 1.5 }}
							>
								{loading ? (
									<CircularProgress style={{ color: "white" }} />
								) : isPatientEditing ? (
									"Update Details"
								) : (
									"Submit"
								)}
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
