import { Home } from "./pages/Home";
import { RouteProps } from "react-router-dom";

export const routes = [
	{
		path: ["/", "/home"],
		component: Home,
		exact: true
	}
] as RouteProps[];
