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
        res.status(500).json(error.toString());
    }
};

export default createNewCategory;
