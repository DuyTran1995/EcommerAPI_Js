import express from 'express';
const router = express.Router();

import SignUp from '../controllers/Customer/SignUpController';
import SignIn from '../controllers/Customer/SignInController';
import UpdateCustomerController from '../controllers/Customer/UpdateCustomerController';
import DeleteCustomerController from '../controllers/Customer/DeleteCustomerController';
import GetCustomer from '../controllers/Customer/GetCustomer';

import { validateBody, schemas } from '../helper/JoiSignUpRequest';

import passport from 'passport';
// eslint-disable-next-line no-unused-vars
const passportConfig = require('../middleware/passport');

// import {
//     uploadCloudinaryCustomerAvatar,
//     getCloudinaryImages,
// } from '../middleware/cloudinary';
import GetCustomerWithId from '../controllers/Customer/GetCustomerById';

/**
 *
 * @param {express} app include from app.js
 */

const CustomerRoutes = (app) => {
    router.get('/', GetCustomer);

    router.get('/:customerId', GetCustomerWithId);

    router.post('/sign-up', validateBody(schemas.SignUpSchema), SignUp);

    router.post(
        '/sign-in',
        passport.authenticate('local', { session: false }),
        SignIn
    );

    router.patch(
        '/:customerId',
        passport.authenticate('jwt', { session: false }),
        UpdateCustomerController
    );

    router.delete(
        '/:customerId',
        passport.authenticate('jwt', { session: false }),
        DeleteCustomerController
    );

    return app.use('/api/v1/customer', router);
};

export default CustomerRoutes;
