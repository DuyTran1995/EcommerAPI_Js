import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const CustomerEntitySchema = mongoose.Schema({
    firstName: String,

    lastName: String,

    email: {
        type: String,
        unique: true,
    },

    image: {
        type: String,
    },

    password: String,

    created_at: {
        type: Date,
        default: Date.now(),
    },
});

CustomerEntitySchema.statics = {
    getAllCustomer() {
        console.log(this);
        return this.find();
    },

    getCustomerById(id) {
        return this.findById(id);
    },

    createNewCustomer(newCustomer) {
        return this.create(newCustomer);
    },

    getCustomerByEmail(email) {
        return this.findOne({ email });
    },

    deleteCustomerById(id) {
        return this.findOneAndDelete({ _id: id });
    },
};

CustomerEntitySchema.pre('save', async function (next) {
    try {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

var CustomerModel = mongoose.model('Customer-entity', CustomerEntitySchema);

export default CustomerModel;
