import React from "react";
import { connect } from "react-redux";
import { WeatherView } from "./Weather.view";
import { AppState } from "../../../../store";
import { useEffectAsync } from "../../../../common/useEffectAsync";
import { getWeather } from "./handlers/GetWeather";
import { initWeather } from "../../../../store/Weather/Weather.actions";
import { WeatherType } from "../../../../store/Weather/Weather.state";

type WeatherState = {
	description: string;
	cityName: string;
	temperature: number;
	iconName: string;
	cityNameForSearch: string;
};

type WeatherDispatch = {
	initWeather: typeof initWeather,
};

export type WeatherProps = WeatherState & WeatherDispatch;

const Weather: React.FC<WeatherProps> = (props) => {
	useEffectAsync(async() => {
		const response = await getWeather(props.cityNameForSearch);
		const {main, description, icon} = response.weather[0];
		const {temp} = response.main;

		props.initWeather(main as WeatherType, description, icon, response.name, temp);
	}, [props.cityNameForSearch]);

	return <WeatherView {...props} />
}

const mapStateToProps = (state: AppState): WeatherState => {
	const {temperature, cityName, description, iconName} = state.weather;
	const {cityName: cityNameForSearch} = state.searchOptions;

	return {temperature, cityName, description, iconName, cityNameForSearch};
}

const mapDispatchToProps: WeatherDispatch = {
	initWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
