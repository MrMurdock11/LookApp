import styles from "./Home.style.css";

import React from "react";
import { HomeProps } from "./Home";
import { Header } from "./childs/Header";
import { Weather } from "./childs/Weather";

export const HomeView: React.FC<HomeProps> = (props) => {
	return (
		<div className={styles.container}>
			<Header />
			<Weather />
		</div>
	);
}
