import styles from "./Weather.style.css";

import React from "react";
import { WeatherProps } from "./Weather";
import { getMonthName } from "./handlers/GetMonthName";
import { convertKelvinToCelsius } from "./handlers/ConvertKelvinToCelsius";
import { convertUnixTimestampToTime } from "./handlers/ConvertUnixTimestampToTime";

export const WeatherView: React.FC<WeatherProps> = (props) => {
	const {
		temperature,
		iconName,
		cityName,
		description,
		country,
		languageForSearch,
		sunrise,
		sunset,
		feelsLike,
	} = props;

	const currentDate = new Date();
	const currentMonthString = getMonthName(currentDate.getMonth(), languageForSearch);

	return (
		<div className={styles.container}>
			<div className={styles.weather}>
				<div className={styles.information}>
					<div className={styles.cityName}>{`${cityName}, ${country}`}</div>
					<div className={styles.currentDate}>{`${currentDate.getDate()} ${currentMonthString}, ${currentDate.getFullYear()}`}</div>
					<div className={styles.description}>
						<img className={styles.icon} src={`http://openweathermap.org/img/wn/${iconName}@2x.png`} />
						<span>{description[0].toUpperCase() + description.slice(1)}</span>
					</div>
					<div className={styles.sunriseAndSunset}>
						<div className={styles.sunrise}>
							<div className={styles.icon} />
							<div className={styles.value}>{convertUnixTimestampToTime(sunrise, languageForSearch)}</div>
						</div>
						<div className={styles.sunset}>
							<div className={styles.icon} />
							<div className={styles.value}>{convertUnixTimestampToTime(sunset, languageForSearch)}</div>
						</div>
					</div>
				</div>
				<div className={styles.temperature}>
					<div className={styles.value}>{convertKelvinToCelsius(temperature)}</div>
					<div className={styles.celsiusIndicator} />
					<div className={styles.divider}>/</div>
					<div className={styles.feelsLike}>{convertKelvinToCelsius(feelsLike)}°</div>
				</div>
			</div>
		</div>
	);
}
