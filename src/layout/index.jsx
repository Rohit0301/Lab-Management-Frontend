import React from "react";
import Sidebar from "./Sidebar";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";

export function AuthLayout({ children }) {
	return (
		<Grid
			container
			style={{ width: "100%", height: "100vh", overflow: "hidden" }}
		>
			<Grid item xs={12} sx={{ height: "max-content" }}>
				<Navbar />
			</Grid>
			<Grid container xs={12} sx={{ height: "94%" }}>
				<Grid item md={3} lg={2} xs={0} height="100vh">
					<Sidebar />
				</Grid>
				<Grid
					item
					md={9}
					lg={10}
					xs={12}
					height="100vh"
					style={{ overflowY: "scroll" }}
				>
					{children}
				</Grid>
			</Grid>
		</Grid>
	);
}

export function UnAuthLayout({ children }) {
	return (
		<Grid container style={{ width: "100%", height: "100vh" }}>
			<Grid item xs={12} sx={{ height: "max-content" }}>
				<Navbar />
			</Grid>
			<Grid item xs={12} sx={{ height: "100%" }}>
				{children}
			</Grid>
		</Grid>
	);
}
