import styles from "./NotFound.style.css";

import React from "react";
import { NotFoundProps } from "./NotFound";

export const NotFoundView: React.FC<NotFoundProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.notFound} />
		</div>
	);
}
