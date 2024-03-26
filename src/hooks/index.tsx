import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../features";
import { useSelector } from "react-redux";
import { setLogout } from "../features/slices/auth/authSlice";
import { ErrorPropsSlice, setError } from "../features/slices/error/errorSlice";

export const useHooks = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const token = useSelector((state: RootState) => {
		return state.auth.token;
	});
	const userData = useSelector((state: RootState) => {
		return state.auth.user;
	});

	const goTo = (path: string) => {
		if (!path) return;
		navigate(path);
	};

	const logout = () => {
		dispatch(setLogout());
		goTo("/");
	};

	const setErrorHandling = (error: ErrorPropsSlice) => {
		dispatch(setError(error));
	};

	return {
		goTo,
		logout,
		token,
		userData,
		setErrorHandling,
	};
};
