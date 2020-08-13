import styles from "./Weather.style.css";

import React from "react";
import { WeatherProps } from "./Weather";
import { getMonthName } from "./handlers/GetMonthName";

export const WeatherView: React.FC<WeatherProps> = (props) => {
	const {temperature, iconName, cityName, description, country, languageForSearch} = props;
	const currentDate = new Date();

	return (
		<div className={styles.container}>
			<div className={styles.weather}>
				<div className={styles.information}>
					<div className={styles.cityName}>{`${cityName}, ${country}`}</div>
					<div className={styles.currentDate}>{`${currentDate.getDate()} ${getMonthName(currentDate.getMonth(), languageForSearch)}, ${currentDate.getFullYear()}`}</div>
					<div className={styles.description}>
						<img className={styles.icon} src={`http://openweathermap.org/img/wn/${iconName}@2x.png`} />
						<span>{description[0].toUpperCase() + description.slice(1)}</span>
					</div>
				</div>
				<div className={styles.temperature}>
					<div className={styles.value}>{Math.round(temperature ? temperature - 273.15 : 0)}</div>
					<div className={styles.celsiusIndicator} />
				</div>
			</div>
		</div>
	);
}
