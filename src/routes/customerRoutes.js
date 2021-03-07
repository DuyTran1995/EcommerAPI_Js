import express from 'express';
const router = express.Router();

import SignUp from '../controllers/SignUpController';
import SignIn from '../controllers/SignInController';
import { uploadCloudinaryImageController } from '../controllers/CloudinaryController';

import { validateBody, schemas } from '../helper/JoiSignInRequest';

import passport from 'passport';
const passportConfig = require('../middleware/passport');
import { uploadCloudinaryFile } from '../middleware/cloudinary';

/**
 *
 * @param {express} app include from app.js
 */

const CustomerRoutes = (app) => {
    router.post('/sign-up', validateBody(schemas.SignUpSchema), SignUp);
    router.post('/sign-in', passport.authenticate('jwt'), SignIn);

    router.get('/images');

    router.post(
        '/upload',
        uploadCloudinaryFile,
        uploadCloudinaryImageController
    );

    router.post('/test', (req, res) => {
        console.log(console.log('123'));
    });

    return app.use('/api/v1/customer', router);
};

export default CustomerRoutes;
