// import mongoose from 'mongoose';
import mongoose, { Schema } from 'mongoose';

import bcrypt from 'bcrypt';

const AdminUserSchema = new Schema({
    email: {
        type: String,
        required: 'Email address is required',
        trim: true,
        lowercase: true,
        unique: 'Email is already exist',
    },

    password: {
        type: String,
        required: true,
        minlength: 4,
    },

    first_name: {
        type: String,
        minlength: [2, 'First Name is too short'],
    },

    last_name: {
        type: String,
        minlength: [2, 'Last Name is too short'],
    },

    phone: {
        type: Number,
        required: 'Phone Number is required',
        minlength: [4, 'Phone Number is to short'],
    },

    avatar: {
        type: String,
    },

    address: {
        type: String,
    },

    admin_level: {
        type: Number,
        default: 0,
    },

    create_at: {
        type: Date,
        default: new Date(),
    },

    status: {
        type: Number,
        default: 1,
    },
});

AdminUserSchema.pre('save', async function (next) {
    try {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    } catch (error) {
        next(error);
    }
});

AdminUserSchema.statics = {
    createNewUser(newUser) {
        return this.create(newUser);
    },

    findAllUser() {
        return this.find();
    },

    findUserById(id) {
        return this.findById(id);
    },

    findUserByEmail(email) {
        return this.findOne({ email });
    },

    deteleUserById(id) {
        return this.findOneAndDelete({ _id: id });
    },

    UpdateUserById(id) {
        return this.findByIdAndUpdate(
            { _id: id },
            { first_name, last_name, phone, avatar, address, create_at }
        );
    },
};

AdminUserSchema.methods = {
    async comparePassword(password) {
        try {
            const compared = await bcrypt.compare(password, this.password);
            if (!compared) {
                throw 'Password is not found';
            }

            return compared;
        } catch (error) {
            throw error;
        }
    },
};

const AddminUsersModel = mongoose.model('Users', AdminUserSchema);

export default AddminUsersModel;
