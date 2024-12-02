const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    pic: {
        type: String,
        default: "https://res.cloudinary.com/dxkufsejm/image/upload/v1631060139/blank-profile-picture-973460_640_zwvq6r.png"
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;