import express from 'express';
import { devLogger } from "./devLogger";
import dotenv from 'dotenv';
import 'colors';

dotenv.config( { path: '.env.local' } );

const app = express();

const PORT = process.env.PORT || 5000;
app.listen( PORT, () =>
{
    devLogger( `Server started on port ${ PORT }`.green.bold );
} );