import CustomerModel from '../models/CustomerSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */

const SignIn = async (req, res) => {
    const { name, email, password } = req.body;

    const newCustomer = new CustomerModel({
        name,
        email,
        password,
    });

    newCustomer
        .save()
        .then((result) => res.send(result))
        .catch((error) => res.send(error));
};

export { SignIn };
