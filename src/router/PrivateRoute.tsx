import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "../pages/layout/Layout";
import { RouteMenu } from "./interface";

interface Props {
	path?: string;
	roles?: Array<ROLE>;
	menu: RouteMenu[];
	token: string | null;
}

enum ROLE {
	ADMIN = "admin",
	USER = "user",
}

export const PrivateRoute = ({ menu, token }: Props) => {
	if (token) {
		return (
			<Layout menu={menu}>
				<Outlet />
			</Layout>
		);
	}

	return <Navigate to="/dashboard/login" replace />;
};
