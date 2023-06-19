import { Box } from "@mui/material";
import React, { useEffect } from "react";

import { useGlobalContext } from "../hooks";
import { PatientInvoice } from "../components";

export default function Invoice() {
	const { invoiceData } = useGlobalContext();
	useEffect(() => {}, [invoiceData]);
	return (
		<Box>
			<PatientInvoice />
		</Box>
	);
}
