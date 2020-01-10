import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    addUser(res: any, createUserDto: UserDto): Promise<any>;
    getUser(res: any, userID: any): Promise<any>;
    updateUser(res: any, userID: any, createUserDto: UserDto): Promise<any>;
    deleteUser(res: any, userID: any): Promise<any>;
    getAllUser(res: any): Promise<any>;
}
