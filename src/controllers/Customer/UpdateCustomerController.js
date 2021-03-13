import CustomerModel from '../../models/CustomerSchema';

import { removeCloudinaryImage } from '../../middleware/cloudinary';

/**
 *
 * @param {*} req
 * @param {*} res
 */

const UpdateCustomerController = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const { customerId } = req.params;

    try {
        const getImageById = await CustomerModel.getCustomerById(customerId);

        if (!getImageById)
            res.status(404).json({
                success: false,
                message: 'Not found Customer',
            });

        removeCloudinaryImage(getImageById.image);

        const updateCustomer = await CustomerModel.findOneAndUpdate(
            { _id: customerId },
            {
                firstName,
                lastName,
                email,
                password,
                updated_at: new Date(),
            }
        );

        updateCustomer.save();

        res.status(200).json({
            success: true,
            message: 'Customer updated Done!',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error,
        });
    }
};

export default UpdateCustomerController;
