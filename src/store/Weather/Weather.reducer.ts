import { Keys } from "./Weather.keys";
import { Actions } from "./Weather.actions.type";
import { initState, State } from "./Weather.state";

export const weather = (state = initState, action: Actions): State => {
	switch(action.type) {
		case Keys.INIT_CURRENT_WEATHER:
			return action.currentWeather;
		default:
			return state;
	}
}
