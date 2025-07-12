import { Dayjs } from "dayjs";

export type UserToRegister = {
    email: string;
    name: string;
    lastName: string;
    company?: string;
    birthday: Dayjs;
    password: string;
    confirmPassword: string;
}

export type UserForLogin = {
    email: string;
    password: string;
}