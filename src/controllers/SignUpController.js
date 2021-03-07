import CustomerModel from '../models/CustomerSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */

const SignUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const newCustomer = new CustomerModel({
        firstName,
        lastName,
        email,
        password,
    });

    CustomerModel.createNewCustomer(newCustomer)
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(400).send(error));
};

export default SignUp;
