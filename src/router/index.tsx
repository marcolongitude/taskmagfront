import { Routes, Route } from "react-router-dom";
import { LoginST } from "../pages/login/";
import { PrivateRoute } from "../router/PrivateRoute";
import { RouteMenu } from "./interface";
import ControlPointDuplicateOutlinedIcon from "@mui/icons-material/ControlPointDuplicateOutlined";
import { ListagemTarefas } from "../pages/tarefas";
import { ListagemTarefasConcluidas } from "../pages/tarefasConcluidas";
import { useHooks } from "../hooks";

export const AppRoutes = () => {
	const menu: RouteMenu[] = [
		{
			text: "Tarefas",
			menu: [
				{
					text: "Tarefas pendentes",
					icon: <ControlPointDuplicateOutlinedIcon />,
					navigate: "/dashboard/tarefas",
				},
				{
					text: "Tarefas concluídas",
					icon: <ControlPointDuplicateOutlinedIcon />,
					navigate: "/dashboard/tarefasconcluidas",
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
			<Route
				path="dashboard"
				element={<PrivateRoute token={token} menu={menu} />}
			>
				<Route
					path="tarefasconcluidas"
					element={<ListagemTarefasConcluidas />}
				/>
			</Route>
			<Route path="/" element={<LoginST />} />
		</Routes>
	);
};
