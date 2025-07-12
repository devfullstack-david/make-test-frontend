import api from "@/connections/api";
import { UserToRegister } from "@/types/services/user";

export async function registerUser(params: UserToRegister) {
    try {
        const response = await api.post('/register', {
            params,
        });

        return response;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Error in register user');
    }
}