import styles from "./Header.style.css";

import React from "react";
import { HeaderProps } from "./Header";
import { Language } from "../../../../store/SearchOptions/SearchOptions.state";

export const HeaderView: React.FC<HeaderProps> = (props) => {
	const {lang} = props;

	const {setCityName, setLanguage} = props;

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.logo}></div>
				<div className={styles.options}>
					<div className={styles.language} onClick={() => setLanguage(lang === Language.RU ? Language.EN : Language.RU)}>
						<span>{lang.toUpperCase()}</span>
						<div className={styles.languageIcon}></div>
					</div>
					<div className={styles.search}>
						<input onKeyPress={e => {
							if (e.key === "Enter") {
								setCityName(e.currentTarget.value);
							}
						}} type="text" placeholder="Найти свой город" />
						<button className={styles.button} />
					</div>
				</div>
			</div>
		</div>
	);
}
