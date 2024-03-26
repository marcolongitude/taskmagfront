import axios from "axios";
import { API_BASE_URL } from "../../constants/api";
import { IResponseDeleteTarefasByUser } from "../../types/tasks/types.tasks";

export interface PayloadDeleteTasks {
	idtasks: string;
	token: string;
}

export const DeleteTarefaByUserService = async ({
	idtasks,
	token,
}: PayloadDeleteTasks): Promise<IResponseDeleteTarefasByUser> => {
	const response = await axios.delete(`${API_BASE_URL}/tasks/${idtasks}`, {
		headers: {
			Authorization: token,
		},
	});
	return response.data;
};
