"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
exports.ProviderSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    avatar: String,
    bio: String
}, {
    timestamps: true
});
exports.ProviderSchema.pre('save', function (next) {
    let provider = this;
    if (!provider.avatar) {
        provider.avatar = gravatar.url(provider.email, { protocol: 'https' });
    }
    if (!provider.isModified('password'))
        return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err)
            return next(err);
        bcrypt.hash(provider.password, salt, (err, hash) => {
            if (err)
                return next(err);
            provider.password = hash;
            next();
        });
    });
});
exports.ProviderSchema.methods.checkPassword = function (attempt, callback) {
    let provider = this;
    bcrypt.compare(attempt, provider.password, (err, isMatch) => {
        if (err)
            return callback(err);
        callback(null, isMatch);
    });
};
//# sourceMappingURL=provider.schema.js.map