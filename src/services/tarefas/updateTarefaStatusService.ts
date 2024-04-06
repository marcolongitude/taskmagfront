import axios from "axios";
import { API_BASE_URL } from "../../constants/api";
import { IResponseEditTarefasByUser } from "../../types/tasks/types.tasks";

export type PayloadEditTasks = {
	data: { [chave: string]: boolean }[];
	token: string;
};

export const UpdateTarefaStatusService = async ({
	data,
	token,
}: PayloadEditTasks): Promise<IResponseEditTarefasByUser> => {
	const response = await axios.put(
		`${API_BASE_URL}/tasks/status`,
		{ listStatusTasks: data },
		{
			headers: {
				Authorization: token,
			},
		}
	);
	return response.data;
};
