import { UnAuthLayout, AuthLayout } from "../layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterPatient from "../pages/RegisterPatient";
import TestAssignment from "../pages/TestAssignment";
import TestListing from "../pages/TestListing";

import { BrowserRouter as Router } from "react-router-dom";
import RouterCombiner from "./RouterCombiner";
import PageNotFound from "../pages/PageNotFound";
import PatientListing from "../pages/PatientListing";

export const routes = [
	{
		title: "Login",
		path: "/login",
		description: "Live Health | Login",
		Component: Login,
		Layout: UnAuthLayout,
	},
	{
		title: "Register",
		path: "/register",
		description: "Live Health | Register",
		Component: Register,
		Layout: UnAuthLayout,
	},
	{
		title: "Add New Patient",
		path: "/new-patient",
		description: "Add New Patient",
		Component: RegisterPatient,
		accessRoles: ["laboratory"],
		Layout: AuthLayout,
	},
	{
		title: "Assign Test",
		path: "/assign-test",
		description: "Assign test to patients",
		Component: TestAssignment,
		accessRoles: ["laboratory"],
		Layout: AuthLayout,
	},
	{
		title: "List Test",
		path: "/tests",
		description: "List all the test available in the lab",
		Component: TestListing,
		accessRoles: ["laboratory"],
		Layout: AuthLayout,
	},
	{
		title: "List Patient",
		path: "/patients",
		description: "List all the patients registered in a lab",
		Component: PatientListing,
		private: true,
		accessRoles: ["laboratory"],
		Layout: AuthLayout,
	},
	{
		title: "List Reports",
		path: "/reports",
		description: "List patient reports",
		Component: TestListing,
		private: true,
		accessRoles: ["laboratory", "user"],
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
	const role = "laboratory";
	const auth = true;
	return (
		<Router>
			<RouterCombiner routes={routes} auth={auth} role={role} />
		</Router>
	);
};
