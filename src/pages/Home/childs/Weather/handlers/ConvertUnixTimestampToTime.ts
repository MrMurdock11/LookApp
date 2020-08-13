import { Language } from "../../../../../store/SearchOptions/SearchOptions.state";

/**
 * Конвертирует миллисекунды во время в формате `hh:mm:ss`.
 *
 * @param {number} milliseconds Миллисекунды.
 * @returns {string} Возвращает время в формате `hh:mm:ss`.
 */
export const convertUnixTimestampToTime = (milliseconds: number, language: Language): string => {
	const date = new Date(milliseconds * 1000);
	const options = {
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit"
	} as Intl.DateTimeFormatOptions;

	return date.toLocaleString(language, options);
}
