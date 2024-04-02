import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Chip,
	Stack,
	Switch,
	Typography,
} from "@mui/material";
import {
	IResponseGetTarefasByUser,
	ITarefa,
} from "../../../types/tasks/types.tasks";
import { useHooks } from "../../../hooks";
import { useEditTarefasByUser } from "../hooks/editTarefasByUser";

import { useDeleteTarefasByUser } from "../hooks/deleteTarefasByUser";
import { useHandleFunctions } from "../hooks/functions/handleFunctions";
import { AddTarefa } from "../components/modal/addTarefa";
import { EditTarefa } from "../components/modal/editTarefa";
import { DeleteTarefa } from "../components/modal/deleteTarefa";
import { useState } from "react";

interface ListaTarefasProps {
	tarefas: IResponseGetTarefasByUser;
}

export const ListaTarefas = ({ tarefas }: ListaTarefasProps) => {
	const { token } = useHooks();

	const {
		openModal,
		handleOpenModal,
		handleCloseModal,
		openModalEdit,
		handleOpenModalEdit,
		handleCloseModalEdit,
		taskSelected,
		handleOpenModalDelete,
		handleCloseModalDelete,
		openModalDelete,
	} = useHandleFunctions();

	const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>(
		tarefas.data.reduce((acc: Record<string, boolean>, tarefa: ITarefa) => {
			acc[tarefa.idtasks] = tarefa.status === "concluido";
			return acc;
		}, {})
	);

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		taskId: string
	) => {
		setCheckedTasks({
			...checkedTasks,
			[taskId]: event.target.checked,
		});
	};

	const { submitEditTask } = useEditTarefasByUser(handleCloseModalEdit);
	const { submitDeleteTask } = useDeleteTarefasByUser(handleCloseModalDelete);

	return (
		<Stack>
			<Box display={"flex"} justifyContent={"end"} width={"100%"} mb={4}>
				<Button
					onClick={handleOpenModal}
					color="success"
					variant="outlined"
				>
					Adicionar tarefa
				</Button>
			</Box>
			<Stack gap={2} direction={"column"}>
				{tarefas.data &&
					tarefas.data &&
					tarefas.data.map((tarefa) => (
						<Box key={tarefa.idtasks}>
							<Card
								sx={{
									padding: "8px",
								}}
							>
								<Stack
									width={"100%"}
									direction={"row"}
									justifyContent={"end"}
								>
									<Switch
										checked={checkedTasks[tarefa.idtasks]}
										onChange={(event) =>
											handleChange(event, tarefa.idtasks)
										}
										inputProps={{
											"aria-label": "controlled",
										}}
										color="secondary"
										size="small"
									/>
								</Stack>
								<CardHeader
									title={tarefa.title}
									color="secondary"
									subheader={
										<Typography
											color="text.secondary"
											sx={{
												marginLeft: 2,
												marginTop: "2px",
											}}
										>
											Data:{" "}
											{tarefa.date || "não informado"}
										</Typography>
									}
								/>
								<CardContent>
									<Typography variant="body1" component="p">
										{tarefa.description}
									</Typography>
									<Stack
										width={"100%"}
										flexDirection={"row"}
										justifyContent={"start"}
										mt={8}
										gap={1}
									>
										<Chip
											color="success"
											component={"span"}
											label={`Tempo: ${tarefa.time}`}
											size="small"
											variant="outlined"
										/>
										<Chip
											color="info"
											component={"span"}
											label={`Status: ${tarefa.status}`}
											size="small"
											variant="outlined"
										/>
									</Stack>
								</CardContent>
								<CardActions>
									<Box
										width={"100%"}
										display={"flex"}
										justifyContent={"end"}
										gap={2}
									>
										<Button
											size="small"
											onClick={() =>
												handleOpenModalEdit(tarefa)
											}
											color="primary"
											variant="outlined"
										>
											Editar tarefa
										</Button>
										<Button
											size="small"
											onClick={() =>
												handleOpenModalDelete(tarefa)
											}
											color="error"
											variant="outlined"
										>
											Deletar tarefa
										</Button>
									</Box>
								</CardActions>
							</Card>
						</Box>
					))}
				{tarefas.data.length === 0 && (
					<Typography variant="h6" component="p" color="secondary">
						Nenhuma tarefa encontrada
					</Typography>
				)}
			</Stack>
			{openModal && (
				<AddTarefa
					openModal={openModal}
					handleCloseModal={handleCloseModal}
				/>
			)}
			{openModalEdit && (
				<EditTarefa
					openModal={openModalEdit}
					handleCloseModal={handleCloseModalEdit}
					task={taskSelected}
					token={token}
					submit={submitEditTask}
				/>
			)}
			{openModalDelete && (
				<DeleteTarefa
					openModal={openModalDelete}
					closeModal={handleCloseModalDelete}
					task={taskSelected}
					token={token}
					submit={submitDeleteTask}
				/>
			)}
		</Stack>
	);
};
