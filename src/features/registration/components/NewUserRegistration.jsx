import {
	Button,
	TextField,
	Box,
	Typography,
	Container,
	CircularProgress,
} from "@mui/material";
import { PasswordField, UserTypes } from "../../../components";
import { LOGIN } from "../../../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useReducer } from "react";
import { useGlobalContext } from "../../../hooks";
import {
	newUserRegistrationInitialState as initialState,
	newUserRegistrationReducer as reducer,
} from "../reducer";
import { userRegister } from "../../../store/authSlice/action";
import { setDefaultValues } from "../../../store/authSlice";

export default function RegistrationPresenter() {
	const reduxDispatch = useDispatch();
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(reducer, initialState);
	const { openNotification, userType } = useGlobalContext();
	const { loading, status } = useSelector((state) => state.auth);
	const { data, isFormValid, errors } = state;

	useEffect(() => {
		dispatch({
			type: "RESET_FIELDS",
		});
	}, [userType]);

	useEffect(() => {
		reduxDispatch(setDefaultValues());
	}, []);

	useEffect(() => {
		if (status) {
			openNotification({
				type: status,
				message:
					status === "error"
						? "Something went wrong"
						: "Registered, please login to continue!",
			});
			if (status === "success") {
				dispatch({
					type: "RESET_FEILDS",
				});
				navigate(LOGIN);
			}
		}
	}, [status]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: "SET_EMPTY_FIELD_ERROR",
			value: userType,
		});
		if (!isFormValid) return;
		if (userType === "user") {
			reduxDispatch(userRegister(data));
		}
	};

	const handleChange = (e) => {
		dispatch({
			type: "SET_DATA",
			key: e.target.name,
			value: e.target.value,
		});
	};
	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 3,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					Register
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}
					autoComplete="off"
				>
					<UserTypes title="Register for" />
					{userType === "user" ? (
						<TextField
							margin="normal"
							required
							fullWidth
							id={"full_name"}
							label="Full Name"
							name="full_name"
							onChange={handleChange}
							value={data["full_name"]}
							autoFocus
							error={errors?.full_name ? true : false}
							helperText={errors?.full_name}
						/>
					) : (
						<TextField
							margin="normal"
							required
							fullWidth
							id="name"
							label="Laboratory Name"
							name="name"
							onChange={handleChange}
							value={data["name"]}
							autoFocus
							error={errors?.name ? true : false}
							helperText={errors?.name}
						/>
					)}
					<TextField
						margin="normal"
						required
						fullWidth
						id="email_id"
						label="Email Address"
						onChange={handleChange}
						value={data["email_id"]}
						name="email_id"
						error={errors?.email_id ? true : false}
						helperText={errors?.email_id}
						autoFocus
					/>

					<PasswordField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						id="password"
						onChange={handleChange}
						value={data["password"]}
						error={errors?.password ? true : false}
						helperText={errors?.password}
					/>
					<PasswordField
						margin="normal"
						required
						fullWidth
						name="confirm_password"
						label="Confirm Password"
						id="confirm_password"
						onChange={handleChange}
						value={data["confirm_password"]}
						error={errors?.confirm_password ? true : false}
						helperText={errors?.confirm_password}
					/>
					{userType === "laboratory" && (
						<>
							<TextField
								margin="normal"
								required
								fullWidth
								name="phone_no"
								label="Phone Number"
								type="text"
								id="phone_no"
								onChange={handleChange}
								value={data["phone_no"]}
								error={errors?.phone_no ? true : false}
								helperText={errors?.phone_no}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								multiline
								rows={3}
								name="address"
								label="Address"
								type="text"
								id="address"
								onChange={handleChange}
								value={data["address"]}
								error={errors?.address ? true : false}
								helperText={errors?.address}
							/>
						</>
					)}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						disabled={loading || !isFormValid}
						sx={{ mt: 3, mb: 2, p: 1.5 }}
					>
						{loading ? (
							<CircularProgress style={{ color: "#fff" }} />
						) : (
							"Register"
						)}
					</Button>
					<Typography sx={{ float: "right" }}>
						Already have an account?
						<Link to={LOGIN}> Sign In</Link>
					</Typography>
				</Box>
			</Box>
		</Container>
	);
}
