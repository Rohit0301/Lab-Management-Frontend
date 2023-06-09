import React from "react";
import {
	Box,
	Button,
	IconButton,
	Modal,
	TextField,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../index.module.css";

export default function AddTestModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Button onClick={handleOpen} variant="contained">
				Add New Test
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					component="form"
					className={styles.modal}
					noValidate
					sx={{ mt: 1 }}
					autoComplete="off"
				>
					<Box className={styles.modal_head}>
						<Typography variant="h6">Add New Test</Typography>
						<IconButton onClick={handleClose}>
							<CloseIcon />
						</IconButton>
					</Box>
					<TextField
						margin="normal"
						required
						fullWidth
						id="test_name"
						label="Test Name"
						name="test_name"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="type"
						id="type"
						label="Type"
						type="text"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="price"
						id="price"
						label="Price"
						type="text"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="sample"
						id="sample"
						label="Sample Needed"
						type="text"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="description"
						id="description"
						label="Description"
						type="text"
					/>
					<Box className="btn_container">
						<Button
							fullWidth
							onClick={handleClose}
							variant="outlined"
							sx={{ mt: 3, mb: 2, p: 1 }}
						>
							Cancel
						</Button>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, p: 1 }}
						>
							Add Test
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
}
