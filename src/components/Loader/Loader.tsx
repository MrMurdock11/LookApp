import React from "react";
import { LoaderView } from "./Loader.view";

type LoaderState = { /* your states */ };

export type LoaderProps = LoaderState;

export const Loader: React.FC<LoaderProps> = (props) => {
	return <LoaderView {...props} />
}
