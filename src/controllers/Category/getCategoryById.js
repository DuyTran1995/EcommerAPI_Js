import CategoriesModel from '../../models/CategoriesSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getCategoryById = async (req, res) => {
    const { categoryId } = req.params;

    try {
        const getCategory = await CategoriesModel.getCategoryById(
            categoryId
        ).populate('productsId');

        if (!getCategory) {
            res.status(404).json({
                success: false,
                message: 'Categories is not found',
            });
        }

        res.status(200).json({
            success: true,
            data: getCategory,
        });
    } catch (error) {
        res.status(500).json(error.toString());
    }
};

export default getCategoryById;
