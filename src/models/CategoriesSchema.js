import mongoose from 'mongoose';

const CategoriesSchema = mongoose.Schema({
    name: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
    updated_at: {
        type: Date,
        default: Date.now(),
    },
    productsId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product-entity',
        },
    ],
});

CategoriesSchema.statics = {
    /**
     *
     * @returns {Array}
     */
    getAllCategories() {
        return this.find();
    },

    /**
     *
     * @param {string} id
     * @returns {Query}
     */
    getCategoryById(id) {
        return this.findById(id);
    },

    /**
     *
     * @param {object} newCategory
     * @returns {Query}
     */
    createNewCategory(newCategory) {
        return this.create(newCategory);
    },

    /**
     *
     * @param {*} id
     * @returns {Query}
     */
    deleteCategoryById(id) {
        return this.findByIdAndDelete(id);
    },
};

var CategoriesModel = mongoose.model('Categories-entity', CategoriesSchema);

export default CategoriesModel;
