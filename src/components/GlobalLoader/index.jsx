import React from "react";
import styles from "./index.module.css";
export default function GlobalLoader() {
	return (
		<div className={styles.preloader}>
			<div className={styles.loader}></div>
		</div>
	);
}
