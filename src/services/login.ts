import api from "@/connections/api";
import { UserForLogin } from "@/types/services/user";
import Cookies from "js-cookie";

export async function login(params: UserForLogin) {
    const response = await api.post('/login', params);
    
    const token = response.data.token;

    Cookies.set('token', token, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
    });

    return response;
};