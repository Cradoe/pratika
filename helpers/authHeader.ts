type User = {
    token: string;
}
export const authHeader = () => {
    // return authorization header with jwt token
    const user: User = JSON.parse(localStorage.getItem('user') || '');

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return null;
    }
}