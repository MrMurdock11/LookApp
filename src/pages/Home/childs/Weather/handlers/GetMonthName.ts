import { Language } from "../../../../../store/SearchOptions/SearchOptions.state";

export const getMonthName = (monthIndex: number, lang: string): string => {
	let monthNames: string[] = null;

	switch(lang) {
		case Language.RU:
			monthNames = [
				"Январь", "Февраль", "Март", "Апрель",
				"Май", "Июнь", "Июль", "Август",
				"Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
			];
			break;
		case Language.EN:
			monthNames = [
				"January", "February", "March", "April", "May",
				"June", "July", "August", "September", "October",
				"November", "December"
			];
			break;
	}

	return monthNames[monthIndex];
}
