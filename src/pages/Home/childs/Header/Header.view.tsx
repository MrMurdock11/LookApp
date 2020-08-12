import styles from "./Header.style.css";

import React from "react";
import { HeaderProps } from "./Header";

export const HeaderView: React.FC<HeaderProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.logo}></div>
				<div className={styles.search}>
					<input onKeyPress={e => {
						if (e.key === "Enter") {
							props.setCityName(e.currentTarget.value);
						}
					}} type="text" placeholder="Найти свой город" />
					<button className={styles.button} />
				</div>
			</div>
		</div>
	);
}
