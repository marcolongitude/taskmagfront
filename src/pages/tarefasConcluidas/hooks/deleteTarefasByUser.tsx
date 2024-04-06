import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { DeleteTarefaByUserService } from "../../../services/tarefas/deleteTarefaByUserService";
import { IResponseDeleteTarefasByUser } from "../../../types/tasks/types.tasks";

export const useDeleteTarefasByUser = (onClose: () => void) => {
	const queryClient = useQueryClient();
	const response = useMutation(
		["tasksByUserStatusConcluido"],
		DeleteTarefaByUserService,
		{
			onSuccess: async (data: IResponseDeleteTarefasByUser) => {
				onClose();
				queryClient.invalidateQueries(["tasksByUserStatusConcluido"]);

				return data;
			},
			onError: (error: AxiosError) => {
				return Promise.reject(error);
			},
		}
	);

	return {
		submitDeleteTask: response.mutate,
		response: response.data,
		isLoading: response.isSuccess,
		isError: response.isError,
		error: response.error,
		status: response.status,
	};
};
