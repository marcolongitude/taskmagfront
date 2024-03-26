export type IResponseGetTarefasByUser = {
	data: {
		idtasks: string;
		title: string;
		description: string;
		time: number;
		users_id_users: string;
		date: string;
	}[];
	statusCode: number;
};

export type IResponseDeleteTarefasByUser = {
	data: {
		idtasks: string;
		title: string;
		description: string;
		time: number;
		users_id_users: string;
		date: string;
	};
	statusCode: number;
};

export type IResponseEditTarefasByUser = {
	data: {
		idtasks: string;
		title: string;
		description: string;
		time: number;
		users_id_users: string;
		date: string;
	};
	statusCode: number;
};

export type IResponsePostTarefasByUser = {
	data: {
		title: string;
		description: string;
		time: number;
		userId: string;
		date: string;
	};
};
