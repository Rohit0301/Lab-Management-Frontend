import React, { useEffect } from "react";

import { renderInvoice } from "../../utils";

const PatientInvoice = ({ invoice_id }) => {
	useEffect(() => {
		if (invoice_id) renderInvoice(invoice_id);
	}, [invoice_id]);
	return (
		<div>
			<div id="pdf"></div>
		</div>
	);
};

export default PatientInvoice;
