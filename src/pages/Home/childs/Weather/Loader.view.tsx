import styles from "./Weather.style.css";

import React from "react";

export const Loader: React.FC = (props) => {
	return (
		<div className={styles.loader} />
	);
}
