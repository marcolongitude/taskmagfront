import { useMutation } from "react-query";
import { Login, PayloadLogin, ResponseLogin } from "../services";
import { setLogin } from "../../../features/slices/auth/authSlice";
import { useAppDispatch } from "../../../features";

interface Props {
	goTo: (path: string) => void;
}

export interface ErrorProps {
	status?: number;
	message?: string;
	response?: {
		status: number;
		data: {
			errors: Array<string>;
		};
	};
}

export const useSubmit = ({ goTo }: Props) => {
	const dispatch = useAppDispatch();

	const {
		mutate: loginUser,
		isLoading,
		error,
		isError,
		data,
	} = useMutation<ResponseLogin, ErrorProps, PayloadLogin>("Login", Login);

	const submit = (formData: PayloadLogin) => {
		loginUser(formData, {
			onSuccess: ({ data }) => {
				const response = {
					token: data.token,
					user: data.user,
				};
				dispatch(setLogin(response));
				goTo("/dashboard/tarefas");
			},
			onError: (error: ErrorProps) => {
				return Promise.reject(error);
			},
		});
	};

	return {
		data,
		submit,
		isLoading,
		error,
		isError,
	};
};
