import { useState } from "react";
import { dataPostTarefaByUser } from "../../../../services/tarefas/postTarefaByUserService";
import {
	IResponseGetTarefasByUser,
	ITarefa,
} from "../../../../types/tasks/types.tasks";
import { useUpdateTarefasStatus } from "../updateTArefasStatus";
import { useHooks } from "../../../../hooks";

interface IProps {
	tarefas: IResponseGetTarefasByUser;
}

export const useHandleFunctions = ({ tarefas }: IProps) => {
	const { submitUpdateTaskStatus } = useUpdateTarefasStatus();
	const { token } = useHooks();
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
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
	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleOpenModalEdit = (tarefa: dataPostTarefaByUser) => {
		setTaskSelected(tarefa);
		setOpenModalEdit(true);
	};

	const handleCloseModalEdit = () => {
		setOpenModalEdit(false);
	};

	const handleOpenModalDelete = (tarefa: dataPostTarefaByUser) => {
		setTaskSelected(tarefa);
		setOpenModalDelete(true);
	};

	const handleCloseModalDelete = () => {
		setOpenModalDelete(false);
	};

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
		openModal,
		handleOpenModal,
		handleCloseModal,
		openModalEdit,
		handleOpenModalEdit,
		handleCloseModalEdit,
		taskSelected,
		setTaskSelected,
		handleOpenModalDelete,
		handleCloseModalDelete,
		openModalDelete,
		handleChangeStatusTasks,
		checkedTasks,
	};
};
