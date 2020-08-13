import React from "react";
import { connect } from "react-redux";
import { HeaderView } from "./Header.view";
import { setCityName, setLanguage } from "../../../../store/SearchOptions/SearchOptions.actions";
import { Language } from "../../../../store/SearchOptions/SearchOptions.state";
import { AppState } from "../../../../store";

type HeaderState = {
	lang: Language,
}

type HeaderDispatch = {
	setCityName: typeof setCityName;
	setLanguage: typeof setLanguage;
};

export type HeaderProps = HeaderState & HeaderDispatch;

const Header: React.FC<HeaderProps> = (props) => {
	return <HeaderView {...props} />
}

const mapStateToProps = (state: AppState): HeaderState => {
	const {lang} = state.searchOptions;

	return {lang};
}

const mapDispatchToProps: HeaderDispatch = {
	setCityName,
	setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
