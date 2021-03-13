import CustomerModel from '../../models/CustomerSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const GetCustomerWithId = async (req, res) => {
    const { customerId } = req.params;
    try {
        if (!customerId) {
            res.status(404).json({
                success: false,
                message: 'Id is Required',
            });
        }

        const GetCustomerById = await CustomerModel.getCustomerById(customerId);

        if (!GetCustomerById) {
            res.status(404).json({
                success: false,
                message: 'Customer Not Found',
            });
        }

        res.status(200).json({
            success: true,
            data: GetCustomerById,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error,
        });
    }
};

export default GetCustomerWithId;
