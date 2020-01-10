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
const user_dto_1 = require("./dto/user.dto");
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async addUser(res, createUserDto) {
        try {
            const user = await this.userService.addUser(createUserDto);
            return res.status(common_1.HttpStatus.OK).json({
                msg: 'User has been created successfully',
                user
            });
        }
        catch (e) {
            return res.status(common_1.HttpStatus.CONFLICT).json({
                msg: 'User already exists'
            });
        }
    }
    async getUser(res, userID) {
        const user = await this.userService.getUser(userID);
        if (!user)
            throw new common_1.NotFoundException('User does not exist!');
        return res.status(common_1.HttpStatus.OK).json(user);
    }
    async updateUser(res, userID, createUserDto) {
        const user = await this.userService.updateUser(userID, createUserDto);
        if (!user)
            throw new common_1.NotFoundException('User does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            msg: 'User has been successfully updated',
            user,
        });
    }
    async deleteUser(res, userID) {
        const user = await this.userService.deleteUser(userID);
        if (!user)
            throw new common_1.NotFoundException('User does not exist');
        return res.status(common_1.HttpStatus.OK).json({
            msg: 'User has been deleted',
            user,
        });
    }
    async getAllUser(res) {
        const users = await this.userService.getAllUser();
        return res.status(common_1.HttpStatus.OK).json(users);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUser", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.Get(':userID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.Put(':userID'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('userID')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.Delete(':userID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
__decorate([
    common_1.UseGuards(passport_1.AuthGuard()),
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUser", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map