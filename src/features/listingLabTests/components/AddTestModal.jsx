import React, { useEffect, useReducer } from "react";
import {
	Box,
	Button,
	CircularProgress,
	IconButton,
	Modal,
	TextField,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "../../../hooks";
import { initialState, reducer } from "../reducer";
import { addOrUpdateNewTest } from "../../../store/labSlice/action";
import { setTestError } from "../../../store/labSlice";

export default function AddTestModal() {
	const [open, setOpen] = React.useState(false);
	const reduxDispatch = useDispatch();
	const [state, dispatch] = useReducer(reducer, initialState);
	const { openNotification, isTestEditing, handleEditTest, testData } =
		useGlobalContext();
	const { lab, user } = useSelector((state) => state);
	const { loading, errors, status } = lab;
	const { data } = state;

	useEffect(() => {
		if (isTestEditing)
			dispatch({
				type: "SET_NEW_VALUES",
				data: testData,
			});
	}, [isTestEditing]);

	useEffect(() => {
		if (status) {
			openNotification({
				type: status,
				message:
					status === "error"
						? "Something went wrong"
						: isTestEditing
						? "Test updated successfully"
						: "New Test added successfully !",
			});
			if (status === "success") {
				handleClose();
			}
		}
	}, [status]);

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		dispatch({
			type: "RESET_FEILDS",
		});
		reduxDispatch(setTestError());
		handleEditTest(false);
		setOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		reduxDispatch(
			addOrUpdateNewTest({
				data: { ...state.data, lab: user?.id },
				method: isTestEditing ? "PATCH" : "POST",
				test_id: testData?.id,
			})
		);
	};

	const handleChange = (e) => {
		reduxDispatch(setTestError(e.target.name));
		dispatch({
			type: "SET_DATA",
			key: e.target.name,
			value: e.target.value,
		});
	};
	return (
		<>
			<Button onClick={handleOpen} variant="contained">
				Add New Test
			</Button>
			<Modal
				open={open | isTestEditing}
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
					onSubmit={handleSubmit}
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
						id="ame"
						label="Test Name"
						name="name"
						error={errors?.name ? true : false}
						helperText={errors?.name && errors.name[0]}
						onChange={handleChange}
						value={data["name"]}
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="test_type"
						id="test_type"
						label="Type"
						type="text"
						error={errors?.test_type ? true : false}
						helperText={errors?.test_type && errors.test_type[0]}
						onChange={handleChange}
						value={data["test_type"]}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="price"
						id="price"
						label="Price"
						type="text"
						error={errors?.price ? true : false}
						helperText={errors?.price && errors.price[0]}
						onChange={handleChange}
						value={data["price"]}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="sample_needed"
						id="sample_needed"
						label="Sample Needed"
						type="text"
						error={errors?.sample_needed ? true : false}
						helperText={errors?.sample_needed && errors.sample_needed[0]}
						onChange={handleChange}
						value={data["sample_needed"]}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="description"
						id="description"
						label="Description"
						type="text"
						error={errors?.description ? true : false}
						helperText={errors?.description && errors.description[0]}
						onChange={handleChange}
						value={data["description"]}
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
							disabled={loading}
							sx={{ mt: 3, mb: 2, p: 1 }}
						>
							{loading ? (
								<CircularProgress style={{ color: "white" }} />
							) : isTestEditing ? (
								"Update Test"
							) : (
								"Add Test"
							)}
						</Button>
					</Box>
				</Box>
			</Modal>
		</>
	);
}
