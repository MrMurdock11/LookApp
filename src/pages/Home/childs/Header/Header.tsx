import React from "react";
import { connect } from "react-redux";
import { HeaderView } from "./Header.view";
import { setCityName } from "../../../../store/SearchOptions/SearchOptions.actions";

type HeaderDispatch = {
	setCityName: typeof setCityName;
};

export type HeaderProps = HeaderDispatch;

const Header: React.FC<HeaderProps> = (props) => {
	return <HeaderView {...props} />
}

const mapDispatchToProps: HeaderDispatch = {
	setCityName,
};

export default connect(undefined, mapDispatchToProps)(Header);
