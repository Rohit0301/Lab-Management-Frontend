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
} from "@mui/material";
import styles from "../index.module.css";
import { UserTypes } from "../../../components";

export default function PateintRegistration() {
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
					Add New Patient
				</Typography>
				<Box component="form" noValidate sx={{ mt: 1 }} autoComplete="off">
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								margin="normal"
								required
								fullWidth
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
								id="last_name"
								label="Last Name"
								name="last_name"
								autoFocus
							/>
						</Grid>

						<Grid item xs={12} className={styles.gender_container}>
							<FormLabel id="gender">Gender</FormLabel>
							<RadioGroup
								aria-labelledby="gender"
								defaultValue="male"
								className={styles.gender_controls}
							>
								<FormControlLabel
									value="male"
									key="male"
									control={<Radio />}
									label="Male"
								/>
								<FormControlLabel
									value="female"
									key="female"
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
								id="email"
								label="Email Address"
								name="email"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								margin="normal"
								required
								fullWidth
								name="phone_no"
								label="Phone Number"
								type="text"
								id="phone_no"
							/>
						</Grid>
						<Grid item xs={12}>
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
						</Grid>
						<Grid item xs={12}>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2, p: 1.5 }}
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
