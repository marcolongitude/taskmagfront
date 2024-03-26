import axios from "axios";
import { API_BASE_URL } from "../../constants/api";
import { IResponseEditTarefasByUser } from "../../types/tasks/types.tasks";

export interface dataEditTarefaByUser {
	userId?: string;
	idtasks?: string | number | undefined;
	title: string;
	description: string;
	time: number;
	date: string;
}

export type PayloadEditTasks = {
	data: dataEditTarefaByUser;
	token: string;
};

export const EditTarefaByUserService = async ({
	data,
	token,
}: PayloadEditTasks): Promise<IResponseEditTarefasByUser> => {
	const { idtasks } = Object.assign({}, data, { idtasks: data.idtasks });
	const response = await axios.put(`${API_BASE_URL}/tasks/${idtasks}`, data, {
		headers: {
			Authorization: token,
		},
	});
	return response.data;
};
