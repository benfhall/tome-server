"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ProviderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});
//# sourceMappingURL=provider.schema.js.map