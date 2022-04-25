import { httpClient } from "~/services";
import { IUser } from "~/utils";

export const userService = {

    login: async (loginData: IUser) => {
        const response = handleAuthorizedResponse(await httpClient.post({ url: "/users/login", payload: loginData }));
        const { token, ...user } = response.data;

        if (response.status === 200 && token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
    },
    retrievePassword: async (loginData: IUser) => {
        const response = handleAuthorizedResponse(await httpClient.post({ url: "/users/retrieve-password", payload: loginData }));
        if (response.status === 200) {
            return true;
        }
        return false;
    },
    register: async (userData: IUser) => {
        const response = handleAuthorizedResponse(await httpClient.post({ url: "/users/register", payload: userData }));
        const { user } = response.data;

        return user;

    },
    logout: () => {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
    }

}

function handleAuthorizedResponse(response: any) {
    if (response?.status === 401) {
        // auto logout if 401 response returned from api
        userService.logout();
        location.reload();
        return;
    }
    return response;
}
