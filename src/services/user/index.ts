import axios from "axios";
import { API_BASE_URL } from "../../constants/api";

interface GetUserProps {
    identificacao?: string;
    token: string;
}

export interface Response {
    id_users: string;
    name_users: string;
    email_users: string;
    permission: "admin" | "user" | null;
}

export const GetUser = async ({
    identificacao,
    token,
}: GetUserProps): Promise<Response | undefined> => {
    if (identificacao === "") {
        return;
    }
    const response = await axios.get(`${API_BASE_URL}/users`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const GetUserById = async ({
    identificacao,
    token,
}: GetUserProps): Promise<Response | undefined> => {
    if (identificacao === undefined || identificacao === null) {
        return;
    }

    const response = await axios.get(
        `${API_BASE_URL}/users/id/${identificacao}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data.data.shift();
};

export interface PayloadChangePassword {
    actualPassword: string;
    newPassword: string;
    newPasswordConfirmation: string;
    token?: string;
    userId?: number;
}

export interface ResponseChangePassword {
    passwordChanged: boolean;
    errors?: string[];
}

export const PostChangePassword = async ({
    actualPassword,
    newPassword,
    newPasswordConfirmation,
    token,
}: PayloadChangePassword) => {
    const response = await axios.post(
        `${API_BASE_URL}/Usuario/changepassword`,
        {
            actualPassword,
            newPassword,
            newPasswordConfirmation,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};
