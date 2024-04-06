import { useEffect, useState } from "react";
import { dataPostTarefaByUser } from "../../../../services/tarefas/postTarefaByUserService";
import {
	IResponseGetTarefasByUser,
	ITarefa,
} from "../../../../types/tasks/types.tasks";
import { useHooks } from "../../../../hooks";
import { useUpdateTarefasStatus } from "../updateTArefasStatus";

interface IProps {
	tarefas: IResponseGetTarefasByUser;
}

export const useHandleFunctionsConcluidas = ({ tarefas }: IProps) => {
	const { submitUpdateTaskStatus } = useUpdateTarefasStatus();
	const { token } = useHooks();
	const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
	const [taskSelected, setTaskSelected] = useState<dataPostTarefaByUser>(
		{} as dataPostTarefaByUser
	);
	const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>(
		tarefas.data.reduce((acc: Record<string, boolean>, tarefa: ITarefa) => {
			acc[tarefa.idtasks] = tarefa.status === "concluido";
			return acc;
		}, {})
	);

	const handleOpenModalDelete = (tarefa: dataPostTarefaByUser) => {
		setTaskSelected(tarefa);
		setOpenModalDelete(true);
	};

	const handleCloseModalDelete = () => {
		setOpenModalDelete(false);
	};

	useEffect(() => {
		setCheckedTasks(
			tarefas.data.reduce(
				(acc: Record<string, boolean>, tarefa: ITarefa) => {
					acc[tarefa.idtasks] = tarefa.status === "concluido";
					return acc;
				},
				{}
			)
		);
	}, [tarefas]);

	const handleChangeStatusTasks = (
		event: React.ChangeEvent<HTMLInputElement>,
		taskId: string
	) => {
		// Criando um novo objeto com a tarefa atual marcada/desmarcada
		const updatedCheckedTasks = {
			[taskId]: event.target.checked,
		};

		setCheckedTasks(updatedCheckedTasks);

		// Criando o payload apenas com a tarefa atual
		const payload = [
			{
				[taskId]: updatedCheckedTasks[taskId],
			},
		];

		submitUpdateTaskStatus({ data: payload, token });
	};

	return {
		taskSelected,
		setTaskSelected,
		handleOpenModalDelete,
		handleCloseModalDelete,
		openModalDelete,
		handleChangeStatusTasks,
		checkedTasks,
	};
};
