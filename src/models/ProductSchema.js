import mongoose from 'mongoose';

const ProductEntitySchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    stock: Number,
    description: String,
    categories: String,
});

var ProductModel = mongoose.model('Customer-entity', ProductEntitySchema);

export default ProductModel;
