import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    addUser(createUserDTO: UserDto): Promise<User>;
    getUser(userID: any): Promise<User>;
    updateUser(userID: any, data: any): Promise<User>;
    deleteUser(userID: any): Promise<any>;
    getAllUser(): Promise<User[]>;
    findOneByEmail(email: string): Promise<User>;
}
