import { HOME, LIST_PATIENTS, LIST_TEST, NEW_PATIENT } from "./routes";
import ActionColumn from "../features/listingPatients/components/ActionColumn";
export const ALL_ROLES = ["laboratory", "user"];
export const LABORATORY_ROLE = ["laboratory"];
export const USER_ROLE = ["user"];

export const USER_TYPES = [
	{
		id: 1,
		label: "Patient",
		value: "patient",
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
		path: LIST_TEST,
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
			return <ActionColumn data={data} />;
		},
	},
];

export const DEFAULT_USER = "patient";
