import passport from 'passport';
import passportJwt from 'passport-jwt';

import CustomerModel from '../models/CustomerSchema';

import dotenv from 'dotenv';

dotenv.config();

const JwtStrategy = passportJwt.Strategy;

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
