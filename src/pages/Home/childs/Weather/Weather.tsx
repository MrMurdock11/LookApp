import React, { useState } from "react";
import { connect } from "react-redux";
import { WeatherView } from "./Weather.view";
import { AppState } from "../../../../store";
import { useEffectAsync } from "../../../../common/useEffectAsync";
import { getWeather } from "./handlers/GetWeather";
import { initCurrentWeather } from "../../../../store/Weather/Weather.actions";
import { WeatherType } from "../../../../store/Weather/Weather.state";
import { Loader } from "./Loader.view";

type WeatherState = {
	description: string;
	cityName: string;
	temperature: number;
	iconName: string;
	cityNameForSearch: string;
};

type WeatherDispatch = {
	initWeather: typeof initCurrentWeather,
};

export type WeatherProps = WeatherState & WeatherDispatch;

const Weather: React.FC<WeatherProps> = (props) => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffectAsync(async() => {
		const response = await getWeather(props.cityNameForSearch);
		setIsLoaded(true);

		props.initWeather(response);
	}, [props.cityNameForSearch]);

	return (
		isLoaded ? <WeatherView {...props} /> : <Loader />
	);
}

const mapStateToProps = (state: AppState): WeatherState => {
	const temperature = state.weather.main.temp;
	const cityName = state.weather.name;
	const description = state.weather.weather[0].description;
	const iconName = state.weather.weather[0].icon;

	const {cityName: cityNameForSearch} = state.searchOptions;

	return {temperature, cityName, description, iconName, cityNameForSearch};
}

const mapDispatchToProps: WeatherDispatch = {
	initWeather: initCurrentWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
