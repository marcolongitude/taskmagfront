import { Container } from "../../components/container";
import { ListaTarefas } from "./partials/listaTarefas";
import { useGetTarefasByUserStatus } from "./hooks/getTarefasByUser";

export const ListagemTarefas = () => {
	const { data, isLoading } = useGetTarefasByUserStatus({
		status: "pendente",
	});

	return (
		<Container title="Lista de tarefas pendentes">
			{!isLoading && data && <ListaTarefas tarefas={data} />}
		</Container>
	);
};
