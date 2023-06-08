import {
	Button,
	TextField,
	Box,
	Typography,
	Container,
	RadioGroup,
	FormControlLabel,
	Radio,
	Grid,
} from "@mui/material";
import styles from "../index.module.css";
import { UserTypes } from "../../../components";

export default function AssignTests() {
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
					Assign test to patients
				</Typography>
				<Box component="form" noValidate sx={{ mt: 1 }} autoComplete="off">
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} md={4}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="name"
								label="Test Name"
								name="name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<TextField
								margin="normal"
								required
								fullWidth
								name="price"
								label="Price"
								type="text"
								id="price"
								disabled
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 3, mb: 2, p: 1.5 }}
							>
								Add Test
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
