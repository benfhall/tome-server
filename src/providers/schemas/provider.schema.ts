import * as mongoose from 'mongoose';

export const ProviderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    }
});