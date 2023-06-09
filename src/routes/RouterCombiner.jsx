import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";

const RouterCombiner = ({
	PrivateRoute,
	routes,
	role,
	auth /* Its Only Use For Now,I Handle It With ReduxStore */,
}) => {
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
									<Navigate to="/login" />
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
							element={<ComponentWithLayout />}
							path={path}
						/>,
				  ];
		}
	);

	console.log(RoutesMap);
	return <Routes> {RoutesMap}</Routes>;
};

export default RouterCombiner;
