import CategoriesModel from '../../models/CategoriesSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const updateCategory = async (req, res) => {
    const { name } = req.body;
    const { categoryId } = req.params;

    try {
        const updateCategory = await CategoriesModel.findByIdAndUpdate(
            categoryId,
            {
                name,
                updated_at: new Date(),
            }
        );

        updateCategory.save();

        res.status(200).json({
            success: true,
            message: `Category with id ${categoryId} has been updated`,
        });
    } catch (error) {
        res.status(500).json(error.toString());
    }
};

export default updateCategory;
