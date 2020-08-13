import { Language } from "../../../../../store/SearchOptions/SearchOptions.state";

export const getWeather = async(cityName: string, lang: Language): Promise<any> => {
	const WEATHER_API_KEY = "9bb2e166b25e0ce0735f64b8cf205ef2";

	const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&lang=${lang}`);

	if (response.status > 400) {
		throw new Error(response.statusText);
	} 

	return await response.json();
}