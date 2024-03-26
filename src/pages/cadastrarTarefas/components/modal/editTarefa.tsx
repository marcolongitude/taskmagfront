import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FormDataEdit, FormEditTasks } from "../form/formEditTasks";
import { dataPostTarefaByUser } from "../../../../services/tarefas/postTarefaByUserService";
import {
	dataEditTarefaByUser,
	PayloadEditTasks,
} from "../../../../services/tarefas/editTarefaByUserService";

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
		<Dialog
			maxWidth="lg"
			open={openModal}
			onClose={handleCloseModal}
			aria-labelledby="customized-dialog-title"
		>
			<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
				Editar tarefa
			</DialogTitle>
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
			<DialogContent dividers>
				<FormEditTasks submit={submitEditTaskPut} task={task} />
			</DialogContent>
		</Dialog>
	);
};
