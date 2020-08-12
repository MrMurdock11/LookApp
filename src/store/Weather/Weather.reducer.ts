import { Keys } from "./Weather.keys";
import { Actions } from "./Weather.actions.type";
import { initState, State } from "./Weather.state";

export const weather = (state = initState, action: Actions): State => {
	switch(action.type) {
		case Keys.INIT_WEATHER:
			return {
				...state,
				type: action.weatherType,
				cityName: action.cityName,
				iconName: action.iconName,
				description: action.description,
				temperature: action.temperature
			};
		default:
			return state;
	}
}
