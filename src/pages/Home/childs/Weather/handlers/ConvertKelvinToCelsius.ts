/**
 * Конвертирует кельвины в цельсии.
 *
 * @param {number} kelvinValue Значение по кельвину.
 * @returns {number} Возвращает значение по цельсию.
 */
export const convertKelvinToCelsius = (kelvinValue: number): number => {
	if (!kelvinValue) {
		return 0;
	}
	
	return Math.round(kelvinValue - 273.15);
}
