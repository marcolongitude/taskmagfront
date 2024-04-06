import { useQuery } from "react-query";
import { useHooks } from "../../../hooks";
import { GetTarefasByUserService } from "../../../services/tarefas/getTarefaByUserService";
import { IResponseGetTarefasByUser } from "../../../types/tasks/types.tasks";

export const useGetTarefasByUser = () => {
	const { token, userData } = useHooks();

	const { data, isLoading } = useQuery<IResponseGetTarefasByUser | undefined>(
		"tasksByUser",
		() => GetTarefasByUserService({ token, userId: userData.id_users })
	);

	return { data, isLoading };
};
