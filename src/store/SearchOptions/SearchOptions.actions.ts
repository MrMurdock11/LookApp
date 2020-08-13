import { Keys } from "./SearchOptions.keys";
import { Language } from "./SearchOptions.state";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const setCityName = (cityName: string) => {
	return {
		type: Keys.SET_CITY_NAME,
		cityName,
	} as const;
}

export const setLanguage = (language: Language) => {
	return {
		type: Keys.SET_LANGUAGE,
		language,
	} as const;
}
