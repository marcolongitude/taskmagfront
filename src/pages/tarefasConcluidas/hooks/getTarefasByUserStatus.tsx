import { useQuery } from "react-query";
import { useHooks } from "../../../hooks";
import { IResponseGetTarefasByUser } from "../../../types/tasks/types.tasks";
import { GetTarefasByUserStatusService } from "../../../services/tarefas/getTarefaByUserStatusService";

export const useGetTarefasByUserStatus = ({
	status,
}: {
	status: "concluido" | "pendente";
}) => {
	const { token, userData } = useHooks();

	const { data, isLoading } = useQuery<IResponseGetTarefasByUser | undefined>(
		"tasksByUserStatusConcluido",
		() =>
			GetTarefasByUserStatusService({
				token,
				userId: userData.id_users,
				status,
			})
	);

	return { data, isLoading };
};
