import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { FormData } from "../components/form/formAddTasks";
import { PostTarefaByUserService } from "../../../services/tarefas/postTarefaByUserService";
import { IResponsePostTarefasByUser } from "../../../types/tasks/types.tasks";

export interface Form {
	submitAddTask: (data: FormData) => Promise<IResponsePostTarefasByUser>;
}

export const usePostTarefasByUser = (onClose: () => void) => {
	const queryClient = useQueryClient();
	const response = useMutation(["tasksByUser"], PostTarefaByUserService, {
		onSuccess: async (data) => {
			onClose();
			queryClient.invalidateQueries(["tasksByUser"]);
			return data;
		},
		onError: (error: AxiosError) => {
			return Promise.reject(error);
		},
	});

	return {
		submitAddTask: response.mutate,
		response: response.data,
		isLoading: response.isSuccess,
		isError: response.isError,
		error: response.error,
		status: response.status,
	};
};
