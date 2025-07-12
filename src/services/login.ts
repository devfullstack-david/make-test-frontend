import api from "@/connections/api";
import Cookies from "js-cookie";

export async function login(email: string, password: string) {
    const response = await api.post('/login', {
        email, password,
    });

    const token = response.data.token;

    Cookies.set('token', token, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
    });

    return token;
};