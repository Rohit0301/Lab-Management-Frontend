import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HOME, LOGIN } from "../constants/routes";
import Root from "./Root";

const RouterCombiner = ({ routes, isLoggedIn }) => {
	const RoutesMap = routes.map(
		({
			accessRoles,
			exact = true,
			Layout = ({ children }) => <>{children}</>,
			Component,
			path,
		}) => {
			return Array.isArray(accessRoles)
				? [
						<Route
							key={path}
							exact={exact}
							path={path}
							element={
								!isLoggedIn ? (
									<Navigate to={LOGIN} />
								) : (
									<Root
										Component={Component}
										Layout={Layout}
										accessRoles={accessRoles}
									/>
								)
							}
						/>,
				  ]
				: [
						<Route
							key={path}
							exact={exact}
							element={
								isLoggedIn ? (
									<Navigate to={HOME} />
								) : (
									<Root Component={Component} Layout={Layout} />
								)
							}
							path={path}
						/>,
				  ];
		}
	);
	return <Routes> {RoutesMap}</Routes>;
};

export default RouterCombiner;
