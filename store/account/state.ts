import { IUser } from '~/utils';

// const userData = null;
// const user: User = userData ? JSON.parse(userData) : { username: 'Adewale' };
const user: IUser = { username: 'Adewale' };
export default () => ({
    status: {},
    user
})