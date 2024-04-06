import { Container } from "../../components/container";
import { ListaTarefasConcluidas } from "./partials/listaTarefasConcluidas";
import { useGetTarefasByUser } from "./hooks/getTarefasByUser";

export const ListagemTarefasConcluidas = () => {
	const { data, isLoading } = useGetTarefasByUser();

	return (
		<Container title="Lista de tarefas">
			{!isLoading && data && <ListaTarefasConcluidas tarefas={data} />}
		</Container>
	);
};
