import { IconButton } from "@mui/material";
import { FormAddTasks } from "../form/formAddTasks";
import CloseIcon from "@mui/icons-material/Close";
import { dataPostTarefaByUser } from "../../../../services/tarefas/postTarefaByUserService";
import { usePostTarefasByUser } from "../../hooks/postTarefasByUser";
import { useHooks } from "../../../../hooks";
import { ModalComposition } from "../../../../components/ModalComposition";

interface FormData {
	title: string;
	time: string;
	description: string;
	date: string;
}

interface Props {
	openModal: boolean;
	handleCloseModal: () => void;
}

export const AddTarefa = ({ openModal, handleCloseModal }: Props) => {
	const { token, userData } = useHooks();

	const { submitAddTask } = usePostTarefasByUser(handleCloseModal);

	const submit = (data: FormData) => {
		const payload: dataPostTarefaByUser = {
			description: data.description,
			title: data.title,
			time: Number(data.time),
			userId: userData.id_users,
			date: data.date,
		};

		submitAddTask({
			data: payload,
			token,
		});
	};

	return (
		<ModalComposition.Root
			maxWidth="md"
			open={openModal}
			onClose={handleCloseModal}
		>
			<ModalComposition.Header
				title="Adicionar tarefa"
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
				<FormAddTasks submit={submit} />
			</ModalComposition.Body>
		</ModalComposition.Root>
	);
};
