import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import {
	EditTarefaByUserService,
	PayloadEditTasks,
} from "../../../services/tarefas/editTarefaByUserService";
import { IResponseEditTarefasByUser } from "../../../types/tasks/types.tasks";

export interface Form {
	submitEditTask: (
		data: PayloadEditTasks
	) => Promise<IResponseEditTarefasByUser>;
}

export const useEditTarefasByUser = (onClose: () => void) => {
	const queryClient = useQueryClient();
	const response = useMutation(
		["tasksByUserStatusPendente"],
		EditTarefaByUserService,
		{
			onSuccess: async (data: IResponseEditTarefasByUser) => {
				onClose();
				queryClient.invalidateQueries(["tasksByUserStatusPendente"]);
				return data;
			},
			onError: (error: AxiosError) => {
				return Promise.reject(error);
			},
		}
	);

	return {
		submitEditTask: response.mutate,
		response: response.data,
		isLoading: response.isSuccess,
		isError: response.isError,
		error: response.error,
		status: response.status,
	};
};
