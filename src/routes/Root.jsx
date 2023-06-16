import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchLaboratory,
	fetchSession,
	fetchUser,
} from "../store/authSlice/action";
import { CircularProgress } from "@mui/material";
import PageNotFound from "../pages/PageNotFound";
import { GlobalLoader } from "../components";

export default function Root({ Component, Layout, accessRoles }) {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	useEffect(() => {
		if (auth.isLoggedIn && !auth.user?.id) {
			dispatch(fetchSession());
		}
	}, []);

	useEffect(() => {
		if (auth.user?.id) {
			dispatch(
				auth.role === "user"
					? fetchUser(auth.user?.id)
					: fetchLaboratory(auth.user?.id)
			);
		}
	}, [auth.user?.id]);
	if (auth.globalLoader) {
		return <GlobalLoader />;
	} else if (!accessRoles || accessRoles.includes(auth?.role)) {
		return (
			<Layout>
				<Component />
			</Layout>
		);
	} else return <PageNotFound />;
}
