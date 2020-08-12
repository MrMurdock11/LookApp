import styles from "./Weather.style.css";

import React from "react";
import { WeatherProps } from "./Weather";

export const WeatherView: React.FC<WeatherProps> = (props) => {
	const {temperature, iconName, cityName, description} = props;

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.wrapperTitle}>
					<div className={styles.city}>{cityName}</div>
					<img className={styles.icon} src={`http://openweathermap.org/img/wn/${iconName}@2x.png`} />
				</div>
				<div className={styles.wrapperTemperature}>
					<div className={styles.temperature}>{Math.round(temperature ? temperature - 273.15 : 0)}</div>
					<div className={styles.celsiusIcon} />
				</div>
				<div className={styles.description}>{description[0].toUpperCase() + description.slice(1)}</div>
			</div>
		</div>
	);
}
