import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AddTestModal from "./AddTestModal";
import { CustomTable } from "../../../components";
import { TEST_COLUMN } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchTests } from "../../../store/labSlice/action";
import { setLabDefaultValues } from "../../../store/labSlice";

export default function ListingLabTest() {
	const dispatch = useDispatch();
	const { test_data: data, loading } = useSelector((state) => state.lab);
	useEffect(() => {
		if (!data || data.length === 0) dispatch(fetchTests());
		return () => {
			dispatch(setLabDefaultValues());
		};
	}, []);
	return (
		<Container component="main" maxWidth="lg">
			<Box
				sx={{
					mt: 3,
					mb: 3,
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography component="h1" variant="h5">
					All Available Test
				</Typography>
				<AddTestModal />
			</Box>
			<CustomTable columns={TEST_COLUMN} data={data} loading={loading} />
		</Container>
	);
}
