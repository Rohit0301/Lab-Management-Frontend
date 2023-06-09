import {
	Button,
	TextField,
	Box,
	Typography,
	Container,
	useTheme,
} from "@mui/material";
import { UserTypes } from "../../../components";
import { Link } from "react-router-dom";
import { REGISTER } from "../../../constants/routes";

export default function LoginPresenter() {
	const theme = useTheme();
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
				<Box component="form" noValidate sx={{ mt: 1 }} autoComplete="off">
					<UserTypes title="Login for" />
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2, p: 1.5 }}
					>
						Sign In
					</Button>
					<Typography sx={{ float: "right" }}>
						Don't have an account?
						<Link to={REGISTER}> Register</Link>
					</Typography>
				</Box>
			</Box>
		</Container>
	);
}
