import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const CustomerEntitySchema = mongoose.Schema({
    firstName: String,

    lastName: String,

    email: {
        type: String,
        unique: true,
    },

    password: String,

    created_at: {
        type: Date,
        default: Date.now(),
    },

    updated_at: {
        type: Date,
        default: Date.now(),
    },
});

CustomerEntitySchema.statics = {
    getAllCustomer() {
        return this.find();
    },

    /**
     *
     * @param {string} id
     * @returns {Query}
     */
    getCustomerById(id) {
        return this.findById(id);
    },

    /**
     *
     * @param {object} newCustomer
     * @returns {Query}
     */
    createNewCustomer(newCustomer) {
        return this.create(newCustomer);
    },

    /**
     *
     * @param {string} email
     * @returns {Query}
     */
    getCustomerByEmail(email) {
        return this.findOne({ email });
    },

    /**
     *
     * @param {*} id
     * @returns {Query}
     */
    deleteCustomerById(id) {
        return this.findOneAndDelete({ _id: id });
    },
};

/**
 *
 * @param {string} newPassword
 * @returns {Boolean}
 */
CustomerEntitySchema.methods.isValidPassword = async function (newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
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
