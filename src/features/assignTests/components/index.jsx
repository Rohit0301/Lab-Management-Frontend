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

export default function AssignTests() {
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
				<Box
					component="form"
					noValidate
					sx={{ mt: 1, width: "100%" }}
					autoComplete="off"
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} lg={7}>
							<TextField
								margin="normal"
								required
								fullWidth
								id="name"
								label="Test Name"
								name="name"
								className={styles.input_field}
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={3} lg={3}>
							<TextField
								margin="normal"
								fullWidth
								name="price"
								label="Price"
								type="text"
								id="price"
								className={styles.input_field}
								disabled
							/>
						</Grid>
						<Grid item xs={12} sm={3} lg={2}>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{ mt: 2, mb: 2, p: 1.5 }}
							>
								Add Test
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Divider sx={{ mt: 2, mb: 2 }} />
			<AssignedTestTable />
			<Box className="btn_container">
				<Button variant="outlined">Back to details</Button>
				<Button variant="contained">Generate Bill</Button>
			</Box>
		</Container>
	);
}
