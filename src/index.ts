import express, {
    Application,
    Request,
    Response,
    NextFunction
} from 'express';
import Raven = require('raven-js');
import { config } from './config';
import bodyParser, { urlencoded } from 'body-parser';

Raven.config(config.sentryKey).install();
const app:Application=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);

app.get('/',(req:Request,res:Response,next:NextFunction)=>{
   res.json('this is public test route');
})


