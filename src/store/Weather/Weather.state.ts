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
		feels_like: number,
	},
	sys: {
		country: string,
		sunrise: number,
		sunset: number,
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
		country: "RU",
		sunrise: 1597283887,
		sunset: 1597338646,
	},
	name: "Москва",
	main: {
		temp: 0,
		feels_like: 0,
	}
};
