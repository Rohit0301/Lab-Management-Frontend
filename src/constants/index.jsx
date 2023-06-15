import {
	HOME,
	LIST_PATIENTS,
	LIST_REPORTS,
	LIST_TEST,
	NEW_PATIENT,
} from "./routes";
import LabActionColumn from "../features/listingLabTests/components/ActionColumn";
import PatientActionColumn from "../features/listingPatients/components/ActionColumn";
export const ALL_ROLES = ["laboratory", "user"];
export const LABORATORY_ROLE = ["laboratory"];
export const USER_ROLE = ["user"];

export const USER_TYPES = [
	{
		id: 1,
		label: "Patient",
		value: "user",
	},
	{
		id: 2,
		label: "Laboratory",
		value: "laboratory",
	},
];

export const SIDEBAR_MENU = [
	{
		id: 0,
		label: "Home",
		path: HOME,
		accessRoles: ALL_ROLES,
	},
	{
		id: 1,
		label: "List Patients",
		path: LIST_PATIENTS,
		accessRoles: LABORATORY_ROLE,
	},
	{
		id: 2,
		label: "Add New Patient",
		path: NEW_PATIENT,
		accessRoles: LABORATORY_ROLE,
	},
	{
		id: 3,
		label: "List Tests",
		path: LIST_TEST,
		accessRoles: LABORATORY_ROLE,
	},
	{
		id: 4,
		label: "View Reports",
		path: LIST_REPORTS,
		accessRoles: ALL_ROLES,
	},
];

export const PATIENT_COLUMNS = [
	{
		id: 1,
		label: "First Name",
		key: "first_name",
	},
	{
		id: 2,
		label: "Last Name",
		key: "last_name",
	},
	{
		id: 3,
		label: "Email Id",
		key: "email_id",
	},
	{
		id: 4,
		label: "Age",
		key: "age",
		align: "right",
	},
	{
		id: 5,
		label: "Gender",
		key: "gender",
	},
	{
		id: 6,
		label: "Address",
		key: "address",
	},
	{
		id: 7,
		label: "Phone no",
		key: "phone_no",
	},
	{
		id: 8,
		label: "Action",
		align: "center",
		render: (data) => {
			return <PatientActionColumn data={data} />;
		},
	},
];

export const TEST_COLUMN = [
	{
		id: 1,
		label: "Test Name",
		key: "name",
	},
	{
		id: 2,
		label: "Sample Needed",
		key: "sample_needed",
	},
	{
		id: 3,
		label: "Price",
		key: "price",
	},
	{
		id: 4,
		label: "Type",
		key: "test_type",
	},
	{
		id: 5,
		label: "Description",
		key: "description",
	},
	{
		id: 6,
		label: "Action",
		render: (data) => {
			return <LabActionColumn data={data} />;
		},
	},
];
