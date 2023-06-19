import easyinvoice from "easyinvoice";
import moment from "moment";

export async function createInvoice(invoiceData) {
	const data = getSampleData(invoiceData);
	const result = await easyinvoice.createInvoice(data);
	return result;
}

export async function renderInvoice(invoice_id) {
	easyinvoice.render("pdf", invoice_id);
}

export async function downloadInvoice(invoice_id) {
	easyinvoice.print(invoice_id);
}

const getSampleData = (invoice) => {
	var today = new Date();
	var numberOfDaysToAdd = 15;
	var dueDate = today.setDate(today.getDate() + numberOfDaysToAdd);
	return {
		images: {
			logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
			background: "https://public.easyinvoice.cloud/img/watermark-draft.jpg",
		},
		sender: {
			company: invoice?.lab.name,
			address: invoice?.lab.address,
			country: "India",
		},
		client: {
			company: invoice.patient?.patient_name,
			address: invoice.lab?.address,
			country: "India",
		},
		information: {
			date: moment(new Date()).format("Do MMMM YY"),
			number: "bill no",
			"due-date": moment(dueDate).format("Do MMMM YY"),
		},
		products: invoice.bills.map((item) => {
			return {
				quantity: 1,
				description: item.test_name,
				price: item.price,
				"tax-rate": 0,
			};
		}),
		"bottom-notice": "Kindly pay your invoice within 15 days.",
		settings: {
			currency: "INR",
		},
	};
};
