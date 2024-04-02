export interface ITarefa {
	idtasks: string;
	title: string;
	description: string;
	time: number;
	users_id_users: string;
	date: string;
	status: "concluido" | "pendente";
}

export type IResponseGetTarefasByUser = {
	data: ITarefa[];
	statusCode: number;
};

export type IResponseDeleteTarefasByUser = {
	data: ITarefa[];
	statusCode: number;
};

export type IResponseEditTarefasByUser = {
	data: ITarefa[];
	statusCode: number;
};

export type IResponsePostTarefasByUser = {
	data: ITarefa[];
	statusCode: number;
};
