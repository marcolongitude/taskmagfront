import React from "react";
import { useForm } from "react-hook-form";
import {
	Box,
	Button,
	InputAdornment,
	Link,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface FormData {
	email: string;
	password: string;
}

interface FormProps {
	submit: (data: FormData) => void;
	isLoading?: boolean;
	error?: string;
}

export const FormLoginST = ({ submit }: FormProps) => {
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onBlur",
	});

	return (
		<form onSubmit={handleSubmit(submit)}>
			<Stack justifyContent={"center"} spacing={6} m={6}>
				<Box
					display="flex"
					flexDirection={"column"}
					alignItems="start"
					gap={2}
				>
					<Typography variant="h5" color="text.primary">
						Faça o login
					</Typography>
					<Typography variant="body1" color="text.primary">
						Sistemas de tarefas
					</Typography>
					<Link href="#" variant="body2" underline="hover">
						Crie sua conta
					</Link>
				</Box>
				<Stack
					spacing={3}
					display="flex"
					direction="column"
					alignItems="center"
				>
					<TextField
						{...register("email", {
							required: "Email obrigatório",
						})}
						label="Email"
						placeholder="Digite seu email"
						error={!!errors.email}
						helperText={errors.email?.message}
						fullWidth
						color="primary"
					/>
					<TextField
						{...register("password", {
							required: "Senha obrigatória",
						})}
						label="Senha"
						placeholder="Digite sua password"
						error={!!errors.password?.message}
						helperText={errors.password?.message}
						fullWidth
						color="primary"
						InputProps={{
							endAdornment: (
								<div onClick={handleClickShowPassword}>
									<InputAdornment
										sx={{ cursor: "pointer" }}
										position="end"
									>
										{showPassword ? (
											<VisibilityOff />
										) : (
											<Visibility />
										)}
									</InputAdornment>
								</div>
							),
						}}
						type={showPassword ? "text" : "password"}
					/>
				</Stack>
				<Stack
					display={"flex"}
					justifyContent={"center"}
					alignItems={"end"}
					direction={"column"}
					spacing={1}
				>
					<Button fullWidth variant="contained" type="submit">
						Entrar
					</Button>
					<Link href="#" variant="body2" underline="hover">
						Esqueceu sua senha?
					</Link>
				</Stack>
			</Stack>
		</form>
	);
};
