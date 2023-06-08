import {
	Button,
	TextField,
	Box,
	Typography,
	Container,
	RadioGroup,
	FormControlLabel,
	Radio,
} from "@mui/material";
import styles from "../index.module.css";
import { UserTypes } from "../../../components";

export default function LoginPresenter() {
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
				</Box>
			</Box>
		</Container>
	);
}
