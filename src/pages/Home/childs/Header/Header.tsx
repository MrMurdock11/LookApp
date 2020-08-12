import React from "react";
import { connect } from "react-redux";
import { HeaderView } from "./Header.view";

type HeaderDispatch = { /* your dispatchs */ };

export type HeaderProps = HeaderDispatch;

const Header: React.FC<HeaderProps> = (props) => {
	return <HeaderView {...props} />
}

const mapDispatchToProps: HeaderDispatch = {
	// your dispatchs
};

export default connect(undefined, mapDispatchToProps)(Header);
