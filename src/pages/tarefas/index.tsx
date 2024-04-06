import { Container } from "../../components/container";
import { ListaTarefas } from "./partials/listaTarefas";
import { useGetTarefasByUser } from "./hooks/getTarefasByUser";

export const ListagemTarefas = () => {
	const { data, isLoading } = useGetTarefasByUser();

	return (
		<Container title="Lista de tarefas">
			{!isLoading && data && <ListaTarefas tarefas={data} />}
		</Container>
	);
};
