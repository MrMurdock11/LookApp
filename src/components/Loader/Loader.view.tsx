import styles from "./Loader.style.css";

import React from "react";
import { LoaderProps } from "./Loader";

export const LoaderView: React.FC<LoaderProps> = (props) => {
	return (
		<div className={styles.loader} />
	);
}
