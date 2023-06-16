import { TextField, Box, Typography, Container } from "@mui/material";
import { LoaderButton, PasswordField, UserTypes } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import { HOME, REGISTER } from "../../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useReducer } from "react";
import { useGlobalContext } from "../../../hooks";
import { initialState, reducer } from "../reducer";
import { setDefaultValues } from "../../../store/authSlice";
import { laboratoryLogin, userLogin } from "../../../store/authSlice/action";
import { USER_ROLE } from "../../../constants";

export default function LoginPresenter() {
	const reduxDispatch = useDispatch();
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(reducer, initialState);
	const { openNotification, userType } = useGlobalContext();
	const { loading, status, serverError } = useSelector((state) => state.auth);
	const { data, isFormValid, errors } = state;

	useEffect(() => {
		dispatch({
			type: "RESET_FIELDS",
		});
	}, [userType]);

	useEffect(() => {
		reduxDispatch(setDefaultValues());
		return () => {
			reduxDispatch(setDefaultValues());
		};
	}, []);

	useEffect(() => {
		if (status) {
			openNotification({
				type: status,
				message:
					status === "error"
						? serverError || "Something went wrong"
						: "LoggedIn successfully !",
			});
			if (status === "success") {
				dispatch({
					type: "RESET_FEILDS",
				});
				navigate(HOME);
			}
		}
	}, [status]);

	const handleChange = (e) => {
		dispatch({
			type: "SET_DATA",
			key: e.target.name,
			value: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: "SET_EMPTY_FIELD_ERROR",
			cb: () =>
				reduxDispatch(
					userType === USER_ROLE ? userLogin(data) : laboratoryLogin(data)
				),
		});
	};
	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					Sign In
				</Typography>
				<Box
					component="form"
					onSubmit={(e) => handleSubmit(e, isFormValid)}
					noValidate
					sx={{ mt: 1 }}
					autoComplete="off"
				>
					<UserTypes title="Login for" />
					<TextField
						margin="normal"
						required
						fullWidth
						id="email_id"
						label="Email Address"
						name="email_id"
						autoFocus
						onChange={handleChange}
						value={data["email_id"]}
						error={errors?.email_id ? true : false}
						helperText={errors?.email_id}
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
					<LoaderButton
						type="submit"
						fullWidth
						loading={loading}
						variant="contained"
						sx={{ mt: 3, mb: 2, p: 1.5 }}
					>
						Sign In
					</LoaderButton>

					<Typography sx={{ float: "right" }}>
						Don't have an account?
						<Link to={REGISTER}> Register</Link>
					</Typography>
				</Box>
			</Box>
		</Container>
	);
}
