import CategoriesModel from '../../models/CategoriesSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getAllCategories = async (req, res) => {
    try {
        const getCategories = await CategoriesModel.getAllCategories().populate(
            'productsId'
        );

        if (!getCategories) {
            res.status(404).json({
                success: false,
                message: 'Categories is not found',
            });
        }

        res.status(200).json({
            success: true,
            data: getCategories,
        });
    } catch (error) {
        res.status(500).json(error.toString());
    }
};

export default getAllCategories;
