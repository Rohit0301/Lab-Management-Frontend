import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { downloadInvoice, renderInvoice } from "../../utils";
import { Box, Button, Modal } from "@mui/material";
import PatientInvoice from ".";

const ViewInvoice = ({ invoice_id, buttonText }) => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		if (invoice_id) renderInvoice(invoice_id);
	}, [invoice_id]);

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Button onClick={() => setOpen(true)} style={{ padding: 0 }}>
				{buttonText ? buttonText : "View"}
			</Button>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className={styles.modal}>
					<Button
						variant="contained"
						onClick={() => downloadInvoice(invoice_id)}
					>
						Print Invoice
					</Button>
					<PatientInvoice invoice_id={invoice_id} />
				</Box>
			</Modal>
		</>
	);
};

export default ViewInvoice;
