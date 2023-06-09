import { LIST_PATIENTS, LIST_TEST, NEW_PATIENT } from "./routes"

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
        id: 1,
        label: 'List Patients',
        path: LIST_PATIENTS
    },
    {
        id: 2,
        label: 'Add New Patient',
        path: NEW_PATIENT
    },
    {
        id: 3,
        label: 'List Tests',
        path: LIST_TEST
    },
    {
        id: 4,
        label: 'View Reports',
        path: LIST_TEST
    }
]

export const DEFAULT_USER = "patient"