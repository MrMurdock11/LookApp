import React, { useState } from "react";
import { connect } from "react-redux";
import { WeatherView } from "./Weather.view";
import { AppState } from "../../../../store";
import { useEffectAsync } from "../../../../common/useEffectAsync";
import { getWeather } from "./handlers/GetWeather";
import { initCurrentWeather } from "../../../../store/Weather/Weather.actions";
import { Loader } from "../../../../components/Loader";
import { NotFound } from "../../../../components/NotFound";

type WeatherState = {
	description: string;
	cityName: string;
	temperature: number;
	iconName: string;
	cityNameForSearch: string;
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
			const response = await getWeather(props.cityNameForSearch);
			setIsLoaded(true);
			setHasError(false);
			
			props.initWeather(response);
		} catch(error) {
			setHasError(true);
		}
	}, [props.cityNameForSearch]);

	return (
		hasError ? <NotFound /> : (isLoaded ? <WeatherView {...props} /> : <Loader />)
	);
}

const mapStateToProps = (state: AppState): WeatherState => {
	const temperature = state.weather.main.temp;
	const cityName = state.weather.name;
	const description = state.weather.weather[0].description;
	const iconName = state.weather.weather[0].icon;
	const country = state.weather.sys.country;

	const {cityName: cityNameForSearch} = state.searchOptions;

	return {temperature, cityName, description, iconName, cityNameForSearch, country};
}

const mapDispatchToProps: WeatherDispatch = {
	initWeather: initCurrentWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
