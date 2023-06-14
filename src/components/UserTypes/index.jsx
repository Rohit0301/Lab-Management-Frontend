import React, { useState } from "react";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import styles from "./index.module.css";
import { USER_TYPES } from "../../constants";
import { useGlobalContext } from "../../hooks";
export default function UserTypes({ title }) {
	const { userType, handleChangeUserType } = useGlobalContext();
	return (
		<>
			<Typography variant="body1">{title}</Typography>
			<RadioGroup
				className={styles.user_types_container}
				name="login_user"
				// defaultValue={DEFAULT_USER}
				value={userType}
				onChange={(e) => handleChangeUserType(e.target.value)}
			>
				{USER_TYPES.map(({ value, id, label }) => (
					<FormControlLabel
						className={styles.user_type}
						value={value}
						key={id}
						control={<Radio />}
						label={label}
					/>
				))}
			</RadioGroup>
		</>
	);
}
