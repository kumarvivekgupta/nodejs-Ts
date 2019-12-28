import { IUser } from '../interface/user';

export interface ILoginResponse {
    data: {
        message: string;
        token: string;
        user: {
            data: IUser
        }
    };

}