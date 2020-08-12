import { Keys } from "./SearchOptions.keys";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const setCityName = (cityName: string) => {
	return {
		type: Keys.SET_CITY_NAME,
		cityName,
	} as const;
}
