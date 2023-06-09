import { HOME, LIST_PATIENTS, LIST_TEST, NEW_PATIENT } from "./routes"

export const ALL_ROLES = ["laboratory","user"];
export const LABORATORY_ROLE = ["laboratory"];
export const USER_ROLE = ["user"]

export const USER_TYPES = [
    {
        id:1,
        label: 'Patient',
        value: 'patient'
    },
    {
        id:2,
        label: 'Laboratory',
        value: 'laboratory'
    }
]

export const SIDEBAR_MENU = [
    {
        id: 0,
        label: 'Home',
        path: HOME,
        accessRoles: ALL_ROLES
    },
    {
        id: 1,
        label: 'List Patients',
        path: LIST_PATIENTS,
        accessRoles: LABORATORY_ROLE
    },
    {
        id: 2,
        label: 'Add New Patient',
        path: NEW_PATIENT,
        accessRoles: LABORATORY_ROLE
    },
    {
        id: 3,
        label: 'List Tests',
        path: LIST_TEST,
        accessRoles: LABORATORY_ROLE
    },
    {
        id: 4,
        label: 'View Reports',
        path: LIST_TEST,
        accessRoles: ALL_ROLES
    }
]

export const DEFAULT_USER = "patient"