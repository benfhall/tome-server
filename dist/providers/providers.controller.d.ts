import { ProviderDto } from './dto/provider.dto';
import { ProvidersService } from './providers.service';
export declare class ProvidersController {
    private providerService;
    constructor(providerService: ProvidersService);
    addProvider(res: any, createProviderDto: ProviderDto): Promise<any>;
    getProvider(res: any, providerID: any): Promise<any>;
    updateProvider(res: any, providerID: any, createProviderDto: ProviderDto): Promise<any>;
    deleteProvider(res: any, providerID: any): Promise<any>;
    getAllProvider(res: any): Promise<any>;
}
