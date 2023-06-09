import { Button, TextField, Box, Typography, Container } from "@mui/material";
import { UserTypes } from "../../../components";
import { LOGIN } from "../../../constants/routes";
import { Link } from "react-router-dom";

export default function RegistrationPresenter() {
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
				<Box component="form" noValidate sx={{ mt: 1 }} autoComplete="off">
					<UserTypes title="Register for" />
					<TextField
						margin="normal"
						required
						fullWidth
						id="full_name"
						label="Full Name"
						name="full_name"
						autoFocus
					/>
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
					<TextField
						margin="normal"
						required
						fullWidth
						name="confirm_password"
						label="Confirm Password"
						type="password"
						id="confirm_password"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="phone_no"
						label="Phone Number"
						type="text"
						id="phone_no"
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
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2, p: 1.5 }}
					>
						Register
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
