import ProductModel from '../../models/ProductSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getProductById = async (req, res) => {
    const { productId } = req.params;
    try {
        let getProduct = await ProductModel.getProductBysku(productId);

        if (!getProduct) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        res.status(400).json({
            success: true,
            data: getProduct,
        });
    } catch (error) {
        res.status(500).json(error.toString());
    }
};

export default getProductById;
