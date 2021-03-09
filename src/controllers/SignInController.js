import { generateToken } from '../helper/jwt.helper';
import dotenv from 'dotenv';
import CustomerModel from '../models/CustomerSchema';

dotenv.config();

/**
 *
 * @param {*} req
 * @param {*} res
 */

const SECRET_JWT = process.env.SECRET_JWT;
let d = new Date();

/**
 *
 * @param {*} req
 * @param {*} res
 */
const SignIn = async (req, res) => {
    const getCustomerByEmail = await CustomerModel.getCustomerByEmail(
        req.body.email
    );

    const token = await generateToken(
        { id: getCustomerByEmail._id },
        SECRET_JWT,
        d.setDate(d.getDay() + 3)
    );

    res.setHeader('Authorization', `Bearer ${token}`);
    res.status(200).json({ 'Success Token': true });
};

export default SignIn;
