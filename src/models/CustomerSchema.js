import mongoose from 'mongoose';

const CustomerEntitySchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

var CustomerModel = mongoose.model('Customer-entity', CustomerEntitySchema);

export default CustomerModel;
