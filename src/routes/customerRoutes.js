import express from 'express';
const router = express.Router();

import SignUp from '../controllers/Customer/SignUpController';
import SignIn from '../controllers/Customer/SignInController';
import UpdateCustomerController from '../controllers/Customer/UpdateCustomerController';
import {
    uploadCloudinaryImageController,
    getCloudinaryImagesController,
} from '../controllers/Customer/CloudinaryController';

import { validateBody, schemas } from '../helper/JoiSignUpRequest';

import passport from 'passport';
const passportConfig = require('../middleware/passport');
import {
    uploadCloudinaryFile,
    getCloudinaryImages,
} from '../middleware/cloudinary';

/**
 *
 * @param {express} app include from app.js
 */

const CustomerRoutes = (app) => {
    router.post('/sign-up', validateBody(schemas.SignUpSchema), SignUp);
    router.post(
        '/sign-in',
        passport.authenticate('local', { session: false }),
        SignIn
    );

    router.patch('/:customerId', UpdateCustomerController);

    router.get(
        '/images',
        passport.authenticate('jwt', { session: false }),
        getCloudinaryImages,
        getCloudinaryImagesController
    );

    router.post(
        '/upload',
        passport.authenticate('jwt', { session: false }),
        uploadCloudinaryFile,
        getCloudinaryImages,
        uploadCloudinaryImageController
    );

    return app.use('/api/v1/customer', router);
};

export default CustomerRoutes;
