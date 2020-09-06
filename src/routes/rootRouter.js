import express from 'express';
const router = express.Router();

import { RootController } from '../controllers/rootController';

/**
 *
 * @param {express} app include from app.js
 */

const initRootRoute = (app) => {
    router.get('/', RootController);

    return app.use('/api/v1', router);
};

export default initRootRoute;
