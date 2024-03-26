import axios from "axios";
import { API_BASE_URL } from "../../constants/api";
import { IResponseGetTarefasByUser } from "../../types/tasks/types.tasks";

export type PayloadGetTarefasByUser = {
	token: string;
	userId: string;
};

export const GetTarefasByUserService = async ({
	token,
	userId,
}: PayloadGetTarefasByUser): Promise<IResponseGetTarefasByUser | undefined> => {
	if (token === undefined || token === null) {
		return;
	}

	const response = await axios.get(`${API_BASE_URL}/tasks/user/${userId}`, {
		headers: {
			Authorization: token,
		},
	});

	return response.data;
};
