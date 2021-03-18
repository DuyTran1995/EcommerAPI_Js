import ProductModel from '../../models/ProductSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const updateProduct = async (req, res) => {
    const { name } = req.body;
    const { productSku } = req.params;

    try {
        const updateProduct = await ProductModel.findByIdAndUpdate(productSku, {
            name,
            updated_at: new Date(),
        });

        updateProduct.save();

        res.status(200).json({
            success: true,
            message: `Category with id ${productSku} has been updated`,
        });
    } catch (error) {
        res.status(500).json(error.toString());
    }
};

export default updateProduct;
