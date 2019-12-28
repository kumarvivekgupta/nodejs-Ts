import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';


export const signUp=async (req:Request,res:Response,next:NextFunction)=>{
    const errors=validationResult(req);

    if (!errors.isEmpty()) {
        return next(errors.array());
    }
    try {
        const response = await authService.signUp(req.body);
      //  res.json(response);
    } catch (error) {
        next(error);
    }

}