import axios from "axios";
import { API_BASE_URL } from "../../constants/api";
import { IResponsePostTarefasByUser } from "../../types/tasks/types.tasks";

export interface dataPostTarefaByUser {
	userId?: string;
	idtasks?: string;
	title: string;
	description: string;
	time: number;
	date: string;
}

interface Payload {
	data: dataPostTarefaByUser;
	token: string;
}

export const PostTarefaByUserService = async ({
	data,
	token,
}: Payload): Promise<IResponsePostTarefasByUser> => {
	const response = await axios.post(`${API_BASE_URL}/tasks`, data, {
		headers: {
			Authorization: token,
		},
	});
	return response.data;
};
