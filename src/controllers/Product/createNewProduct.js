import ProductModel from '../../models/ProductSchema';
import CategoriesModel from '../../models/CategoriesSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const createNewProduct = async (req, res) => {
    const { name, price, image, stock, description } = req.body;
    const { categoryId } = req.params;

    try {
        const newProduct = new ProductModel({
            name,
            price,
            image,
            stock,
            description,
        });

        const getCategoryId = await CategoriesModel.getCategoryById(categoryId);

        newProduct.categoryId = getCategoryId;

        await newProduct.save();

        getCategoryId.productsId.push(newProduct._id);

        await getCategoryId.save();

        return res.status(200).json({
            success: true,
            newProduct: newProduct,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};

export default createNewProduct;
