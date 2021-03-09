import passport from 'passport';
import passportJwt from 'passport-jwt';
import passportLocal from 'passport-local';

import CustomerModel from '../models/CustomerSchema';

import dotenv from 'dotenv';

dotenv.config();

const JwtStrategy = passportJwt.Strategy;
const LocalStrategy = passportLocal.Strategy;

const { ExtractJwt } = passportJwt;

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(
                'Authorization'
            ),
            secretOrKey: process.env.SECRET_JWT,
        },
        async (payload, done) => {
            try {
                const getDataFromPayload = await CustomerModel.getCustomerById(
                    payload.data.id
                );
                if (!getDataFromPayload) return done(null, false);
                done(false, getDataFromPayload);
            } catch (error) {
                return done(error, false);
            }
        }
    )
);

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
        },
        async (email, password, done) => {
            try {
                const getUser = await CustomerModel.getCustomerByEmail(email);

                if (!getUser) return done(null, false);

                const comparePassword = await getUser.isValidPassword(password);

                if (!comparePassword) return done(null, false);

                done(null, getUser);
            } catch (error) {
                done(error, false);
            }
        }
    )
);
