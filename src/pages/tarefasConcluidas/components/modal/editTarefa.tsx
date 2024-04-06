import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FormDataEdit, FormEditTasks } from "../form/formEditTasks";
import { dataPostTarefaByUser } from "../../../../services/tarefas/postTarefaByUserService";
import {
	dataEditTarefaByUser,
	PayloadEditTasks,
} from "../../../../services/tarefas/editTarefaByUserService";
import { ModalComposition } from "../../../../components/ModalComposition";

interface Props {
	openModal: boolean;
	handleCloseModal: () => void;
	task: dataPostTarefaByUser;
	submit: (data: PayloadEditTasks) => void;
	token: string;
}

export const EditTarefa = ({
	openModal,
	handleCloseModal,
	task,
	submit,
	token,
}: Props) => {
	const submitEditTaskPut = (data: FormDataEdit) => {
		const payload: dataEditTarefaByUser = {
			description: data.description,
			title: data.title,
			time: Number(data.time),
			date: data.date,
			idtasks: task && Object.keys(task).length ? task.idtasks : 0,
		};

		submit({ data: payload, token });
	};

	return (
		<ModalComposition.Root
			maxWidth="md"
			open={openModal}
			onClose={handleCloseModal}
		>
			<ModalComposition.Header
				title="Editar tarefa"
				onClose={handleCloseModal}
			/>
			<IconButton
				aria-label="close"
				onClick={handleCloseModal}
				sx={{
					position: "absolute",
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}
			>
				<CloseIcon />
			</IconButton>
			<ModalComposition.Body>
				<FormEditTasks submit={submitEditTaskPut} task={task} />
			</ModalComposition.Body>
		</ModalComposition.Root>
	);
};
