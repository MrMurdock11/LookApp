export enum WeatherType {
	THUNDERSTORM = "Thunderstorm",
	DRIZZLE = "Drizzle",
	RAIN = "Rain",
	SNOW = "Snow",
	ATMOSPHERE = "Atmosphere",
	CLEAR = "Clear",
	CLOUDS = "Clouds",
}

export type Weather = {
	main: WeatherType,
	description: string,
	icon: string,
}

export type State = {
	weather: Weather[],
	main: {
		temp: number,
	},
	sys: {
		country: string,
	}
	name: string,
};

export const initState: State = {
	weather: [{
		main: WeatherType.RAIN,
		description: "Небольшой проливной дождь",
		icon: "04d",
	}],
	sys: {
		country: "RU"
	},
	name: "Москва",
	main: {
		temp: 0,
	}
};
