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
<<<<<<< HEAD
	data: ITarefa[];
=======
	data: {
		idtasks: string;
		title: string;
		description: string;
		time: number;
		users_id_users: string;
		date: string;
		status: "concluido" | "pendente";
	}[];
>>>>>>> main
	statusCode: number;
};

export type IResponseDeleteTarefasByUser = {
<<<<<<< HEAD
	data: ITarefa[];
=======
	data: {
		idtasks: string;
		title: string;
		description: string;
		time: number;
		users_id_users: string;
		date: string;
		status: "concluido" | "pendente";
	};
>>>>>>> main
	statusCode: number;
};

export type IResponseEditTarefasByUser = {
<<<<<<< HEAD
	data: ITarefa[];
=======
	data: {
		idtasks: string;
		title: string;
		description: string;
		time: number;
		users_id_users: string;
		date: string;
		status: "concluido" | "pendente";
	};
>>>>>>> main
	statusCode: number;
};

export type IResponsePostTarefasByUser = {
<<<<<<< HEAD
	data: ITarefa[];
=======
	data: {
		title: string;
		description: string;
		time: number;
		userId: string;
		date: string;
		status: "concluido" | "pendente";
	};
>>>>>>> main
	statusCode: number;
};
