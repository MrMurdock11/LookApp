import styles from "./CurrentWeather.style.css";

import React from "react";
import { CurrentWeatherProps } from "./CurrentWeather";

export const CurrentWeatherView: React.FC<CurrentWeatherProps> = (props) => {
	return (
		<div className={styles.container}>{props?.weather?.weather}</div>
	);
}
