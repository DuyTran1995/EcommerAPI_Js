import express from 'express';
const router = express.Router();

import { SignIn } from '../controllers/SignInController';
import SignInRequestSchema from '../helper/SignIn.joi.helper';

/**
 *
 * @param {express} app include from app.js
 */

const initRootRoute = (app) => {
    router.get('/sign-in', SignInRequestSchema, SignIn);

    return app.use('/api/v1', router);
};

export default initRootRoute;
