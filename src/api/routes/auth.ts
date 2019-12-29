import { Router } from 'express';
import {Validators} from '../../utils/validators';
import {signUp} from '../controllers/auth.controller';


export const router:Router=Router();


router.get('/', (req, res) => {
    res.json('Auth working!')
});

// @POST
// @PATH:api/auth/register
// @DESC: create new user to database
// @ACCESS: public
router.get('/register',Validators.getSignUpValidators(),signUp);


// @METHOD: POST
// @PATH: /api/auth/login
// @DESC: login the user
// @ACCESS: public
router.post('/login', Validators.getLoginValidators(), login);

// @METHOD: GET
// @PATH: /api/auth/me
// @DESC: fetching the user profile
// @ACCESS: private
router.get('/me', isAuthenticated, getProfile);