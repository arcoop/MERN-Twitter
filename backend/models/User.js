const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    usernaem: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    hashedPassword: {
        type: String,
        required: true
    }
}, { 
    timestamps: true
});

module.export = mongoose.model('User', userSchema)