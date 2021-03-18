import mongoose from 'mongoose';

const CartSchema = mongoose.Schema({
    created_at: {
        type: Date,
        default: Date.now(),
    },

    updated_at: {
        type: Date,
        default: Date.now(),
    },

    customerOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer-entity',
    },

    productOwner: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product-entity',
        },
    ],
});

var CartModel = mongoose.model('Cart-entity', CartSchema);

export default CartModel;
