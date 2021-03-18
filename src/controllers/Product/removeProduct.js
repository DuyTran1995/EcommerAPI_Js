import ProductModel from '../../models/ProductSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteProduct = async (req, res) => {
    const { productSku } = req.params;

    try {
        await ProductModel.deleteProductBySku(productSku);

        res.status(200).json({
            success: true,
            message: `Product with id ${productSku} has been deleted`,
        });
    } catch (error) {
        res.status(500).json(error.toString());
    }
};

export default deleteProduct;
