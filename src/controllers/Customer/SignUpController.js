import CustomerModel from '../../models/CustomerSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */

const SignUp = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const newCustomer = await new CustomerModel({
            firstName,
            lastName,
            email,
            password,
        });

        const customerCreated = await CustomerModel.createNewCustomer(
            newCustomer
        );
        res.status(200).json(customerCreated);
    } catch (error) {
        res.status(500).json(error);
    }
};

export default SignUp;
