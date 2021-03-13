import CustomerModel from '../../models/CustomerSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const GetCustomer = async (req, res) => {
    try {
        const getAllCustomer = await CustomerModel.getAllCustomer();

        if (!getAllCustomer) {
            res.status(404).json({
                success: false,
                message: 'Customer Not Found',
            });
        }

        res.status(200).json({
            success: true,
            data: getAllCustomer,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error,
        });
    }
};

export default GetCustomer;
