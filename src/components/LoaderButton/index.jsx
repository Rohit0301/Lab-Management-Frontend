import { Button, CircularProgress } from "@mui/material";
import React from "react";

export default function LoaderButton({
	loading,
	children,
	disabled,
	...props
}) {
	return (
		<Button
			{...props}
			style={{ minWidth: "12rem" }}
			disabled={loading || disabled}
		>
			{loading ? (
				<CircularProgress size={30} style={{ color: "white" }} />
			) : (
				children
			)}
		</Button>
	);
}
