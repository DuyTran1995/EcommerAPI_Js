import CustomerModel from '../../models/CustomerSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const DeleteCustomer = async (req, res) => {
    const { customerId } = req.params;
    try {
        if (!customerId) {
            res.status(404).json({
                success: false,
                message: 'Id is Required',
            });
        }

        const GetCustomerById = await CustomerModel.deleteCustomerById(
            customerId
        );

        if (!GetCustomerById) {
            res.status(404).json({
                success: false,
                message: 'Customer Not Found',
            });
        }

        res.status(200).json({
            success: true,
            data: `Delete customer with ID: ${GetCustomerById._id} Success`,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};

export default DeleteCustomer;
