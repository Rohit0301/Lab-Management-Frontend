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
			<Grid container item xs={12} sx={{ height: "94%" }}>
				<Grid item lg={2} md={3} sm={3} height="100vh">
					<Sidebar />
				</Grid>
				<Grid
					item
					lg={10}
					md={9}
					sm={9}
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
		<Grid
			container
			style={{ width: "100%", height: "100vh", overflow: "hidden" }}
		>
			<Grid item xs={12} sx={{ height: "max-content" }}>
				<Navbar />
			</Grid>
			<Grid container item xs={12} sx={{ height: "90%", overflowY: "scroll" }}>
				{children}
			</Grid>
		</Grid>
	);
}
