import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { dataPostTarefaByUser } from "../../../../services/tarefas/postTarefaByUserService";

export interface FormDataEdit {
	title: string;
	time: number;
	description: string;
	date: string;
	idtasks?: string;
}

export interface Props {
	submit: (data: FormDataEdit) => void;
	task: dataPostTarefaByUser;
}

export const FormEditTasks = ({ submit, task }: Props) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: task.title || "",
			time: task.time || 0,
			description: task.description || "",
			date: task.date || "",
		},
	});
	return (
		<form onSubmit={handleSubmit(submit)}>
			<Grid
				container
				rowSpacing={2}
				columnSpacing={{ xs: 2, sm: 2, md: 3 }}
				direction={{
					xs: "column",
					sm: "row",
					md: "row",
				}}
			>
				<Grid item xs={12}>
					<TextField
						{...register("title", { required: true })}
						fullWidth
						label="Título"
						variant="outlined"
						error={!!errors.title}
						helperText={errors.title?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						{...register("time", { required: true })}
						fullWidth
						label="Tempo gasto"
						variant="outlined"
						error={!!errors.time}
						helperText={errors.time?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						{...register("description", { required: true })}
						fullWidth
						multiline
						rows={12}
						label="Descrição"
						variant="outlined"
						error={!!errors.description}
						helperText={errors.description?.message}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						{...register("date", { required: true })}
						fullWidth
						label="Data da tarefa"
						variant="outlined"
						error={!!errors.date}
						helperText={errors.date?.message}
						type={"date"}
						InputLabelProps={{ shrink: true }}
					/>
				</Grid>
			</Grid>
			<Grid item xs={1}>
				<Box
					display={"flex"}
					justifyContent={"end"}
					width={"100%"}
					mt={4}
				>
					<Button autoFocus type="submit">
						Editar tarefa
					</Button>
				</Box>
			</Grid>
		</form>
	);
};
