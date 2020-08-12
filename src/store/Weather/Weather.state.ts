export enum WeatherType {
	THUNDERSTORM = "Thunderstorm",
	DRIZZLE = "Drizzle",
	RAIN = "Rain",
	SNOW = "Snow",
	ATMOSPHERE = "Atmosphere",
	CLEAR = "Clear",
	CLOUDS = "Clouds",
}

export type State = {
	type: WeatherType;
	description: string;
	iconName: string;
	cityName: string;
	temperature: number;
};

export const initState: State = {
	type: WeatherType.RAIN,
	description: "Небольшой проливной дождь",
	iconName: "04d",
	cityName: "Москва",
	temperature: 0,
};
