import { createBrowserRouter } from "react-router-dom";
import { LoginPresenter } from "./features/login";
import {
	NewUserRegistration,
	PateintRegistration,
} from "./features/registration";
import { AssignTests } from "./features/assignTests";
export const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginPresenter />,
	},
	{
		path: "/register",
		element: <NewUserRegistration />,
	},
	{
		path: "/new-patient",
		element: <PateintRegistration />,
	},
	{
		path: "/assign-test",
		element: <AssignTests />,
	},
]);
