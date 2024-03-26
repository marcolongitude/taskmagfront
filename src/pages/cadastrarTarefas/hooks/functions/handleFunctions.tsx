import { useState } from "react";
import { dataPostTarefaByUser } from "../../../../services/tarefas/postTarefaByUserService";

export const useHandleFunctions = () => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
	const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
	const [taskSelected, setTaskSelected] = useState<dataPostTarefaByUser>(
		{} as dataPostTarefaByUser
	);
	const handleOpenModal = () => {
		console.log("passou aqui");
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
	};
};
