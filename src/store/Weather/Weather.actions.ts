import { Keys } from "./Weather.keys";
import { WeatherType } from "./Weather.state";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const initWeather = (weatherType: WeatherType, description: string, iconName: string, cityName: string, temperature: number) => {
	return {
		type: Keys.INIT_WEATHER,
		weatherType, 
		description,
		iconName,
		cityName,
		temperature,
	} as const;
}
