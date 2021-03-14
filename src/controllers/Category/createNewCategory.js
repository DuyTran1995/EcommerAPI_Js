import CategoriesModel from '../../models/CategoriesSchema';

/**
 *
 * @param {*} req
 * @param {*} res
 */
const createNewCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const newCategory = await CategoriesModel.createNewCategory({ name });
        res.status(200).json({
            success: true,
            data: newCategory,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};

export default createNewCategory;
