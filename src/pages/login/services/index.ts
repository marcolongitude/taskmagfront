import axios from "axios";
import { API_BASE_URL } from "../../../constants/api";
// import { AES } from "crypto-js";
export interface ResponseLogin {
	data: {
		token: string;
		user: {
			id_users: string;
			name_users: string;
			email_users: string;
		};
	};
}

export interface PayloadLogin {
	email: string;
	password: string;
}

export const Login = async (payload: PayloadLogin): Promise<ResponseLogin> => {
	// const cipherText = AES.encrypt(
	// 	JSON.stringify(payload),
	// 	"chavesecreta"
	// ).toString();

	const { data } = await axios.post<ResponseLogin>(
		`${API_BASE_URL}/session`,
		payload
	);

	return data;
};
