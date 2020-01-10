import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as gravatar from 'gravatar';

export const ProviderSchema = new mongoose.Schema({
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

ProviderSchema.pre('save', function(next){

    let provider: any = this;

    // Set Gravatar image
    if (!provider.avatar) {
      provider.avatar = gravatar.url(provider.email, {protocol: 'https'});
    }

    // Make sure not to rehash the password if it is already hashed
    if(!provider.isModified('password')) return next();

    // Generate a salt and use it to hash the provider's password
    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err);

        bcrypt.hash(provider.password, salt, (err, hash) => {

            if(err) return next(err);
            provider.password = hash;
            next();
        });
    });
}); 

ProviderSchema.methods.checkPassword = function(attempt, callback){
    let provider = this;

    bcrypt.compare(attempt, provider.password, (err, isMatch) => {
        if(err) return callback(err);
        callback(null, isMatch);
    });
};