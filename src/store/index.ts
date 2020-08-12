import { combineReducers } from "redux";
import { weather } from "./Weather/Weather.reducer";
import { searchOptions } from "./SearchOptions/SearchOptions.reducer";

export const rootReducer = combineReducers({
	weather,
	searchOptions,
});

export type AppState = ReturnType<typeof rootReducer>;
