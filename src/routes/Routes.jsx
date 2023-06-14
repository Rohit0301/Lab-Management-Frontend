import React from "react";
import { UnAuthLayout, AuthLayout } from "../layout";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import {
	ASSIGN_TEST,
	HOME,
	LIST_PATIENTS,
	LIST_REPORTS,
	LIST_TEST,
	LOGIN,
	NEW_PATIENT,
	REGISTER,
} from "../constants/routes";
import { ALL_ROLES, LABORATORY_ROLE } from "../constants";
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const RegisterPatient = React.lazy(() => import("../pages/RegisterPatient"));
const TestAssignment = React.lazy(() => import("../pages/TestAssignment"));
const TestListing = React.lazy(() => import("../pages/TestListing"));
const RouterCombiner = React.lazy(() => import("./RouterCombiner"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));
const PatientListing = React.lazy(() => import("../pages/PatientListing"));
const Reports = React.lazy(() => import("../pages/Reports"));

export const routes = [
	{
		title: "Login",
		path: LOGIN,
		description: "Live Health | Login",
		Component: Login,
		Layout: UnAuthLayout,
	},
	{
		title: "Register",
		path: REGISTER,
		description: "Live Health | Register",
		Component: Register,
		Layout: UnAuthLayout,
	},
	{
		title: "Home",
		path: HOME,
		description: "Live Health | Home",
		Component: Home,
		accessRoles: ALL_ROLES,
		Layout: AuthLayout,
	},
	{
		title: "Add New Patient",
		path: NEW_PATIENT,
		description: "Add New Patient",
		Component: RegisterPatient,
		accessRoles: LABORATORY_ROLE,
		Layout: AuthLayout,
	},
	{
		title: "Assign Test",
		path: ASSIGN_TEST,
		description: "Assign test to patients",
		Component: TestAssignment,
		accessRoles: LABORATORY_ROLE,
		Layout: AuthLayout,
	},
	{
		title: "List Test",
		path: LIST_TEST,
		description: "List all the test available in the lab",
		Component: TestListing,
		accessRoles: LABORATORY_ROLE,
		Layout: AuthLayout,
	},
	{
		title: "List Patient",
		path: LIST_PATIENTS,
		description: "List all the patients registered in a lab",
		Component: PatientListing,
		private: true,
		accessRoles: LABORATORY_ROLE,
		Layout: AuthLayout,
	},
	{
		title: "List Reports",
		path: LIST_REPORTS,
		description: "List patient reports",
		Component: Reports,
		private: true,
		accessRoles: ALL_ROLES,
		Layout: AuthLayout,
	},
	{
		title: "Page Not Found",
		path: "*",
		description: "Page not found",
		Component: PageNotFound,
	},
];

export const PageRoutes = () => {
	const user = useSelector((state) => state.auth);
	return (
		<Router>
			<RouterCombiner routes={routes} role={user?.role} />
		</Router>
	);
};
