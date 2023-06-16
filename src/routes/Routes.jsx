import React from "react";
import { UnAuthLayout, AuthLayout } from "../layout";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
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
import { ALL_ROLES, LABORATORY } from "../constants";
import PatientListing from "../pages/PatientListing";
import PageNotFound from "../pages/PageNotFound";
import Reports from "../pages/Reports";
import RouterCombiner from "./RouterCombiner";
import TestAssignment from "../pages/TestAssignment";
import TestListing from "../pages/TestListing";
import RegisterPatient from "../pages/RegisterPatient";
import Register from "../pages/Register";
import Login from "../pages/Login";
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
		accessRoles: LABORATORY,
		Layout: AuthLayout,
	},
	{
		title: "Assign Test",
		path: ASSIGN_TEST,
		description: "Assign test to patients",
		Component: TestAssignment,
		accessRoles: LABORATORY,
		Layout: AuthLayout,
	},
	{
		title: "List Test",
		path: LIST_TEST,
		description: "List all the test available in the lab",
		Component: TestListing,
		accessRoles: LABORATORY,
		Layout: AuthLayout,
	},
	{
		title: "List Patient",
		path: LIST_PATIENTS,
		description: "List all the patients registered in a lab",
		Component: PatientListing,
		accessRoles: LABORATORY,
		Layout: AuthLayout,
	},
	{
		title: "List Reports",
		path: LIST_REPORTS,
		description: "List patient reports",
		Component: Reports,
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
	const auth = useSelector((state) => state.auth);

	return (
		<Router>
			<RouterCombiner
				routes={routes}
				role={auth?.role}
				isLoggedIn={auth?.isLoggedIn}
			/>
		</Router>
	);
};
