import { check, param, ValidationChain } from 'express-validator';

export class Validators{
    static getSignUpValidators():ValidationChain[]{
        return [
            check('email','Enter a valid email').trim().isEmail(),
            check('password','Password must be min 8 characters').trim().isLength({min:8}),
            check('lastName','Required last name').not().isEmpty(),
            check('firstName','Required first name').not().isEmpty()
        ];
    }
}