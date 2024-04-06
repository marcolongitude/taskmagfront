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
import { IResponseGetTarefasByUser } from "../../../types/tasks/types.tasks";
import { useHooks } from "../../../hooks";

import { useDeleteTarefasByUser } from "../hooks/deleteTarefasByUser";
import { useHandleFunctions } from "../hooks/functions/handleFunctions";
import { DeleteTarefa } from "../components/modal/deleteTarefa";

interface ListaTarefasProps {
	tarefas: IResponseGetTarefasByUser;
}

export const ListaTarefasConcluidas = ({ tarefas }: ListaTarefasProps) => {
	const { token } = useHooks();

	const {
		taskSelected,
		handleOpenModalDelete,
		handleCloseModalDelete,
		openModalDelete,
		handleChangeStatusTasks,
		checkedTasks,
	} = useHandleFunctions({ tarefas });

	const { submitDeleteTask } = useDeleteTarefasByUser(handleCloseModalDelete);

	return (
		<Stack>
			<Stack gap={2} direction={"column"}>
				{tarefas.data &&
					tarefas.data &&
					tarefas.data.map((tarefa) => (
						<Box key={tarefa.idtasks}>
							{tarefa.status === "concluido" && (
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
											checked={
												checkedTasks[tarefa.idtasks]
											}
											onChange={(event) =>
												handleChangeStatusTasks(
													event,
													tarefa.idtasks
												)
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
										<Typography
											variant="body1"
											component="p"
										>
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
													handleOpenModalDelete(
														tarefa
													)
												}
												color="error"
												variant="outlined"
											>
												Deletar tarefa
											</Button>
										</Box>
									</CardActions>
								</Card>
							)}
						</Box>
					))}
				{tarefas.data.length === 0 && (
					<Typography variant="h6" component="p" color="secondary">
						Nenhuma tarefa encontrada
					</Typography>
				)}
			</Stack>
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
