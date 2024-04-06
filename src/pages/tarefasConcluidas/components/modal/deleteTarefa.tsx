import {
	Alert,
	AlertTitle,
	Box,
	Button,
	Stack,
	Typography,
} from "@mui/material";
import { ModalComposition } from "../../../../components/ModalComposition";
import DeleteIcon from "@mui/icons-material/Delete";
import { dataPostTarefaByUser } from "../../../../services/tarefas/postTarefaByUserService";
import { PayloadDeleteTasks } from "../../../../services/tarefas/deleteTarefaByUserService";

interface Props {
	openModal: boolean;
	closeModal: () => void;
	task: dataPostTarefaByUser;
	token: string;
	submit: (data: PayloadDeleteTasks) => void;
}

export const DeleteTarefa = ({
	openModal,
	closeModal,
	task,
	token,
	submit,
}: Props) => {
	return (
		<ModalComposition.Root open={openModal} onClose={closeModal}>
			<ModalComposition.Header
				title="Excluir tarefa"
				onClose={closeModal}
			/>
			<ModalComposition.Body>
				<Stack>
					<Alert
						severity="warning"
						variant="outlined"
						title="Zona de perigo"
					>
						<AlertTitle>Zona de perigo!</AlertTitle>
						<Box>
							<Typography
								variant="body2"
								color="secondary"
								component="p"
							>
								Deseja realmente excluir a tarefa?
							</Typography>
						</Box>
					</Alert>
				</Stack>
			</ModalComposition.Body>
			<ModalComposition.Footer>
				<Stack>
					<Button
						fullWidth
						color="error"
						variant="text"
						endIcon={<DeleteIcon />}
						onClick={() =>
							task.idtasks &&
							submit({
								idtasks: task.idtasks,
								token,
							})
						}
					>
						Deletar
					</Button>
				</Stack>
			</ModalComposition.Footer>
		</ModalComposition.Root>
	);
};
