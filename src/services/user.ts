import api from "@/connections/api";
import { UserToRegister } from "@/types/services/user";

export async function registerUser(params: UserToRegister) {
    const response = await api.post('/register', params);
    return response;
}