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
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ProvidersService = class ProvidersService {
    constructor(providerModel) {
        this.providerModel = providerModel;
    }
    async addProvider(createProviderDTO) {
        const newProvider = await new this.providerModel(createProviderDTO);
        return newProvider.save();
    }
    async getProvider(providerID) {
        const customer = await this.providerModel.findById(providerID).exec();
        return customer;
    }
    async updateProvider(providerID, data) {
        const updatedProvider = await this.providerModel.findByIdAndUpdate(providerID, data, {
            new: true,
        });
        return updatedProvider;
    }
    async deleteProvider(providerID) {
        const deletedProvider = await this.providerModel.findByIdAndRemove(providerID);
        return deletedProvider;
    }
    async getAllProvider() {
        const customers = await this.providerModel.find().exec();
        return customers;
    }
    async findOneByEmail(email) {
        return await this.providerModel.findOne({ email: email }, '+password');
    }
};
ProvidersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Provider')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProvidersService);
exports.ProvidersService = ProvidersService;
//# sourceMappingURL=providers.service.js.map