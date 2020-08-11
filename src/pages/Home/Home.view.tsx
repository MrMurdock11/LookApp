import styles from "./Home.style.css";

import React from "react";
import { HomeProps } from "./Home";
import { CurrentWeather } from "./childs/CurrentWeather";

export const HomeView: React.FC<HomeProps> = (props) => {
	return (
		<div className={styles.container}>
			<CurrentWeather />
		</div>
	);
}
