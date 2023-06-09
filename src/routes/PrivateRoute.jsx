import React from "react";
import { Route, redirect } from "react-router-dom";

const PrivateRoute = (props) => {
	return (
		<Route
			render={() =>
				props.auth ? (
					<props.component />
				) : (
					// <Redirect to={{ pathname: "/login", state: { from: location } }} />
					redirect("/login")
				)
			}
		/>
	);
};
export default PrivateRoute;
