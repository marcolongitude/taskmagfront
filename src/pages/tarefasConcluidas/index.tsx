import { Container } from "../../components/container";
import { useGetTarefasByUserStatus } from "./hooks/getTarefasByUserStatus";
import { ListaTarefasConcluidas } from "./partials/listaTarefasConcluidas";

export const ListagemTarefasConcluidas = () => {
	const { data, isLoading } = useGetTarefasByUserStatus({
		status: "concluido",
	});

	return (
		<Container title="Lista de tarefas concluídas">
			{!isLoading && data && <ListaTarefasConcluidas tarefas={data} />}
		</Container>
	);
};
