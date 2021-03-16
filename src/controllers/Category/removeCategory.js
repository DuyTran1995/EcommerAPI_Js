import CategoriesModel from '../../models/CategoriesSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const deleteCategory = async (req, res) => {
    const { categoryId } = req.params;

    try {
        await CategoriesModel.deleteCategoryById(categoryId);

        res.status(200).json({
            success: true,
            message: `Category with id ${categoryId} has been deleted`,
        });
    } catch (error) {
        res.status(500).json(error.toString());
    }
};

export default deleteCategory;
