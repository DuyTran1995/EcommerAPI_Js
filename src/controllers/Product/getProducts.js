import ProductModel from '../../models/ProductSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getProducts = async (req, res) => {
    try {
        const getAllProducts = await ProductModel.getAllProducts().populate(
            'categoryId'
        );

        if (!getAllProducts) {
            res.status(404).json({
                success: false,
                message: 'Products not found',
            });
        }

        res.status(400).json({
            success: true,
            data: getAllProducts,
        });
    } catch (error) {
        res.status(500).json(error.toString());
    }
};

export default getProducts;
