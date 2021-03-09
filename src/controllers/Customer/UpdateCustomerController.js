import CustomerModel from '../../models/CustomerSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */

const UpdateCustomerController = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const { avatar } = req.files;
    console.log(req.files);
    console.log(req.body);
    console.log(req.params.customerId);
};

export default UpdateCustomerController;
