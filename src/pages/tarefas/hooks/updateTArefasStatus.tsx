import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { IResponsePostTarefasByUser } from "../../../types/tasks/types.tasks";
import { UpdateTarefaStatusService } from "../../../services/tarefas/updateTarefaStatusService";

export interface Form {
	submitUpdateTaskStatus: (
		data: { [chave: string]: boolean }[]
	) => Promise<IResponsePostTarefasByUser>;
}

export const useUpdateTarefasStatus = () => {
	const queryClient = useQueryClient();
	const response = useMutation(
		["tasksByUserStatusPendente"],
		UpdateTarefaStatusService,
		{
			onSuccess: async (data) => {
				queryClient.invalidateQueries(["tasksByUserStatusPendente"]);
				queryClient.invalidateQueries(["tasksByUserStatusConcluido"]);
				return data;
			},
			onError: (error: AxiosError) => {
				return Promise.reject(error);
			},
		}
	);

	return {
		submitUpdateTaskStatus: response.mutate,
		response: response.data,
		isLoading: response.isSuccess,
		isError: response.isError,
		error: response.error,
		status: response.status,
	};
};
