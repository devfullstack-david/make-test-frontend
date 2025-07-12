import Cookies from "js-cookie";

export function useSession() {
    const token = Cookies.get('token');

    const isLoggedIn = token ? true : false;

    const logout = () => {
        Cookies.remove('token');
    };

    return { token, isLoggedIn, logout };
};