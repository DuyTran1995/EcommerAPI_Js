import mongoose from 'mongoose';

const ProductEntitySchema = mongoose.Schema({
    sku: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    image: String,
    stock: Number,
    description: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories-entity',
    },
});

ProductEntitySchema.statics = {
    /**
     *
     * @returns {Array}
     */
    getAllProducts() {
        return this.find();
    },

    /**
     *
     * @param {string} sku
     * @returns {Query}
     */
    getProductBysku(sku) {
        return this.findById(sku);
    },

    /**
     *
     * @param {object} newProduct
     * @returns {Query}
     */
    createNewProduct(newProduct) {
        return this.create(newProduct);
    },

    /**
     *
     * @param {string} sku
     * @returns {Query}
     */
    getProductBySku(sku) {
        return this.findOne({ sku });
    },

    /**
     *
     * @param {*} sku
     * @returns {Query}
     */
    deleteProductBySku(sku) {
        return this.findOneAndDelete({ _sku: sku });
    },
};

var ProductModel = mongoose.model('Product-entity', ProductEntitySchema);

export default ProductModel;
