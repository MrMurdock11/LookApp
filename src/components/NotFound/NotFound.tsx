import React from "react";
import { NotFoundView } from "./NotFound.view";

type NotFoundState = { /* your states */ };

export type NotFoundProps = NotFoundState;

export const NotFound: React.FC<NotFoundProps> = (props) => {
	return <NotFoundView {...props} />
}
