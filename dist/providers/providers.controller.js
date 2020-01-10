"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const provider_dto_1 = require("./dto/provider.dto");
const providers_service_1 = require("./providers.service");
const common_1 = require("@nestjs/common");
let ProvidersController = class ProvidersController {
    constructor(providerService) {
        this.providerService = providerService;
    }
    async addProvider(res, createProviderDto) {
        try {
            const provider = await this.providerService.addProvider(createProviderDto);
            return res.status(common_1.HttpStatus.OK).json({
                msg: 'Provider has been created successfully',
                provider
            });
        }
        catch (e) {
            return res.status(common_1.HttpStatus.CONFLICT).json({
                msg: 'Provider already exists'
            });
        }
    }
    async getAllProvider(res) {
        const providers = await this.providerService.getAllProvider();
        return res.status(common_1.HttpStatus.OK).json(providers);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, provider_dto_1.ProviderDto]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "addProvider", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvidersController.prototype, "getAllProvider", null);
ProvidersController = __decorate([
    common_1.Controller('providers'),
    __metadata("design:paramtypes", [providers_service_1.ProvidersService])
], ProvidersController);
exports.ProvidersController = ProvidersController;
//# sourceMappingURL=providers.controller.js.map