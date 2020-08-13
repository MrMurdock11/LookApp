import { Language } from "../../../../../store/SearchOptions/SearchOptions.state";
import config from "config";

export const getWeather = async(cityName: string, lang: Language): Promise<any> => {
	const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${config.weatherApiKey}&lang=${lang}`);

	if (response.status > 400) {
		throw new Error(response.statusText);
	} 

	return await response.json();
}