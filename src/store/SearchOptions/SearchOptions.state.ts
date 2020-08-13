export enum Language {
	RU = "ru",
	EN = "en",
}

export type State = {
	cityName: string;
	lang: Language;
};

export const initState: State = {
	cityName: "Moscow",
	lang: Language.RU,
};
