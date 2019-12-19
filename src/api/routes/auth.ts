import { Router } from 'express';
import {Validators} from '../../utils/validators'


export const router:Router=Router();


router.get('/', (req, res) => {
    res.json('Auth working!')
});

// @POST
// @PATH:api/auth/register
// @DESC: create new user to database
// @ACCESS: public
router.get('/register',Validators.getSignUpValidators(),signup);