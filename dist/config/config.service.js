"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fs = require("fs");
class ConfigService {
    constructor() {
        if (process.env.NODE_ENV === 'production' ||
            process.env.NODE_ENV === 'staging') {
            this.envConfig = {
                MONGODB_URI: process.env.MONGODB_URI,
                JWT_SECRET: process.env.JWT_SECRET,
            };
        }
        else {
            this.envConfig = dotenv.parse(fs.readFileSync('.env'));
        }
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map