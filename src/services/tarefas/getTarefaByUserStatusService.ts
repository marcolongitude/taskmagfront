import axios from "axios";
import { API_BASE_URL } from "../../constants/api";
import { IResponseGetTarefasByUser } from "../../types/tasks/types.tasks";

export type PayloadGetTarefasByUser = {
	token: string;
	userId: string;
	status: "concluido" | "pendente";
};

export const GetTarefasByUserStatusService = async ({
	token,
	userId,
	status,
}: PayloadGetTarefasByUser): Promise<IResponseGetTarefasByUser | undefined> => {
	if (token === undefined || token === null) {
		return;
	}

	const response = await axios.get(
		`${API_BASE_URL}/tasks/user/${userId}/status/${status}`,
		{
			headers: {
				Authorization: token,
				Accept: "application/json",
			},
		}
	);

	return response.data;
};
