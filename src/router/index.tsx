import { Routes, Route } from "react-router-dom";
import { LoginST } from "../pages/login/";
import { PrivateRoute } from "../router/PrivateRoute";
import { RouteMenu } from "./interface";
import ControlPointDuplicateOutlinedIcon from "@mui/icons-material/ControlPointDuplicateOutlined";
import { ListagemTarefas } from "../pages/cadastrarTarefas";
import { useHooks } from "../hooks";

export const AppRoutes = () => {
	const menu: RouteMenu[] = [
		{
			text: "Tarefas",
			menu: [
				{
					text: "Lista de tarefas",
					icon: <ControlPointDuplicateOutlinedIcon />,
					navigate: "/dashboard/tarefas",
				},
			],
		},
	];

	const { token } = useHooks();

	return (
		<Routes>
			<Route
				path="dashboard"
				element={<PrivateRoute token={token} menu={menu} />}
			>
				<Route path="tarefas" element={<ListagemTarefas />} />
			</Route>
			<Route path="/" element={<LoginST />} />
		</Routes>
	);
};
