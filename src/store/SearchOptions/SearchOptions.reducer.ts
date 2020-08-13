import { Keys } from "./SearchOptions.keys";
import { Actions } from "./SearchOptions.actions.type";
import { initState, State } from "./SearchOptions.state";

export const searchOptions = (state = initState, action: Actions): State => {
	switch(action.type) {
		case Keys.SET_CITY_NAME:
			return {...state, cityName: action.cityName !== "" ? action.cityName : initState.cityName};
		case Keys.SET_LANGUAGE:
			return {...state, lang: action.language};
		default:
			return state;
	}
}
