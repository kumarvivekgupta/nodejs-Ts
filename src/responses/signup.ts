import { IUser } from '../interface/user';

export interface ISignUpResponse {
    data: {
        message: string;
        user: {
            data: IUser
        }
    }
}