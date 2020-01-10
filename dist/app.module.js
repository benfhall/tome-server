"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const providers_module_1 = require("./providers/providers.module");
const config_module_1 = require("./config/config.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_service_1 = require("./config/config.service");
const auth_module_1 = require("./auth/auth.module");
const path = require("path");
const neconfig_1 = require("neconfig");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            providers_module_1.ProvidersModule,
            config_module_1.ConfigModule,
            neconfig_1.NeconfigModule.register({
                readers: [
                    { name: 'env', file: path.resolve(process.cwd(), '.env') }
                ]
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGODB_URI'),
                    useNewUrlParser: true,
                }),
                inject: [config_service_1.ConfigService],
            }),
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map