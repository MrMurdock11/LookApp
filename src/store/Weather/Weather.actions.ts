import { Keys } from "./Weather.keys";
import { State } from "./Weather.state";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const initCurrentWeather = (currentWeather: State) => {
	return {
		type: Keys.INIT_CURRENT_WEATHER,
		currentWeather,
	} as const;
}
