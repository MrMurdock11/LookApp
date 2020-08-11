import React, { useState } from "react";
import { CurrentWeatherView } from "./CurrentWeather.view";
import { useEffectAsync } from "../../../../common/useEffectAsync";
import { getWeather, WeatherResponse } from "./handlers/GetWeather";

type CurrentWeatherState = {
	weather?: WeatherResponse;
};

export type CurrentWeatherProps = CurrentWeatherState;

export const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {
	const [weather, setWeather] = useState<WeatherResponse>(null);

	useEffectAsync(async() => {
		let weatherResponse = null;

		if (!weather)
			weatherResponse = await getWeather();

		setWeather(weatherResponse);
	}, [weather]);

	return <CurrentWeatherView weather={weather} />
}
