import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchLaboratory,
	fetchSession,
	fetchUser,
} from "../store/authSlice/action";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/routes";
import { CircularProgress } from "@mui/material";
import PageNotFound from "../pages/PageNotFound";

export default function Root({ Component, Layout, accessRoles }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const auth = useSelector((state) => state.auth);
	useEffect(() => {
		if (auth.isLoggedIn && !auth.user?.id) {
			const session_id = auth.session_id || localStorage.getItem("session_id");
			if (session_id) dispatch(fetchSession(session_id));
			else navigate(LOGIN);
		}
	}, []);

	useEffect(() => {
		if (auth.user?.id) {
			dispatch(
				auth.role === "user"
					? fetchUser(auth.user.id)
					: fetchLaboratory(auth.user.id)
			);
		}
	}, [auth.user?.id]);

	if (auth.globalLoader) {
		return <CircularProgress color="primary" />;
	} else if (!accessRoles || accessRoles.includes(auth?.role)) {
		return (
			<Layout>
				<Component />
			</Layout>
		);
	} else return <PageNotFound />;
}
