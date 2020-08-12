export type Weather = {
	id: number,
	main: string,
	description: string,
	icon: string,
}

export type WeatherResponse = {
	weather: Weather[],
	main: {
		temp: number,
	},
	name: string,
}

export const getWeather = async(cityName: string): Promise<WeatherResponse> => {
	const WEATHER_API_KEY = "9bb2e166b25e0ce0735f64b8cf205ef2";

	const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&lang=ru`);
	const data: WeatherResponse = await response.json();

	return data;
}