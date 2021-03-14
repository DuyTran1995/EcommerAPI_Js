import express from 'express';
import { CustomerController } from '../controllers';

import { schemas, validateBody } from '../helper/JoiSignUpRequest';

import passport from 'passport';
const router = express.Router();

// eslint-disable-next-line no-unused-vars
const passportConfig = require('../middleware/passport');

/**
 *
 * @param {express} app include from app.js
 */

const CustomerRoutes = (app) => {
    router.get('/', CustomerController.GetCustomer);

    router.get('/:customerId', CustomerController.GetCustomerWithId);

    router.post(
        '/sign-up',
        validateBody(schemas.SignUpSchema),
        CustomerController.SignUp
    );

    router.post(
        '/sign-in',
        passport.authenticate('local', { session: false }),
        CustomerController.SignIn
    );

    router.patch(
        '/:customerId',
        passport.authenticate('jwt', { session: false }),
        CustomerController.UpdateCustomer
    );

    router.delete(
        '/:customerId',
        passport.authenticate('jwt', { session: false }),
        CustomerController.DeleteCustomer
    );

    return app.use('/api/v1/customer', router);
};

export default CustomerRoutes;
