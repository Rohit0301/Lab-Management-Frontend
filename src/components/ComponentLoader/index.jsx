import { CircularProgress } from "@mui/material";
import React from "react";

export default function ComponentLoader({ children, loading }) {
	return <>{loading ? <CircularProgress color="primary" /> : children}</>;
}
