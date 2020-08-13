import React, { useState } from "react";
import { connect } from "react-redux";
import { WeatherView } from "./Weather.view";
import { AppState } from "../../../../store";
import { useEffectAsync } from "../../../../common/useEffectAsync";
import { getWeather } from "./handlers/GetWeather";
import { initCurrentWeather } from "../../../../store/Weather/Weather.actions";
import { Loader } from "../../../../components/Loader";
import { NotFound } from "../../../../components/NotFound";
import { Language } from "../../../../store/SearchOptions/SearchOptions.state";

type WeatherState = {
	description: string;
	cityName: string;
	temperature: number;
	iconName: string;
	cityNameForSearch: string;
	languageForSearch: Language;
	feelsLike: number,
	sunrise: number,
	sunset: number,
	country: string;
};

type WeatherDispatch = {
	initWeather: typeof initCurrentWeather,
};

export type WeatherProps = WeatherState & WeatherDispatch;

const Weather: React.FC<WeatherProps> = (props) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasError, setHasError] = useState(false)

	useEffectAsync(async() => {
		try {
			const response = await getWeather(props.cityNameForSearch, props.languageForSearch);
			setIsLoaded(true);
			setHasError(false);
			
			props.initWeather(response);
		} catch(error) {
			setHasError(true);
		}
	}, [props.cityNameForSearch, props.languageForSearch]);

	return (
		hasError ? <NotFound /> : (isLoaded ? <WeatherView {...props} /> : <Loader />)
	);
}

const mapStateToProps = (state: AppState): WeatherState => {
	const {temp: temperature, feels_like: feelsLike} = state.weather.main;
	const cityName = state.weather.name;
	const description = state.weather.weather[0].description;
	const iconName = state.weather.weather[0].icon;
	const {country, sunset, sunrise} = state.weather.sys;

	const {cityName: cityNameForSearch, lang: languageForSearch} = state.searchOptions;

	return {
		feelsLike,
		sunrise,
		sunset,
		temperature,
		cityName,
		description,
		iconName,
		cityNameForSearch,
		country,
		languageForSearch
	};
}

const mapDispatchToProps: WeatherDispatch = {
	initWeather: initCurrentWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
