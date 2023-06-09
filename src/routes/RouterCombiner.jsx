import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import { HOME, LOGIN } from "../constants/routes";

const RouterCombiner = ({ routes, role }) => {
	const RoutesMap = routes.map(
		({
			accessRoles,
			exact = true,
			Layout = ({ children }) => <>{children}</>,
			Component,
			path,
		}) => {
			const ComponentWithLayout = () => {
				return (
					<Layout>
						<Component />
					</Layout>
				);
			};
			return Array.isArray(accessRoles)
				? [
						<Route
							key={path}
							exact={exact}
							path={path}
							element={
								!role ? (
									<Navigate to={LOGIN} />
								) : accessRoles.includes(role) ? (
									<ComponentWithLayout />
								) : (
									<PageNotFound />
								)
							}
						/>,
				  ]
				: [
						<Route
							key={path}
							exact={exact}
							element={role ? <Navigate to={HOME} /> : <ComponentWithLayout />}
							path={path}
						/>,
				  ];
		}
	);
	return <Routes> {RoutesMap}</Routes>;
};

export default RouterCombiner;
