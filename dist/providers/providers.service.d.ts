import { Model } from 'mongoose';
import { Provider } from './interfaces/provider.interface';
import { ProviderDto } from './dto/provider.dto';
export declare class ProvidersService {
    private readonly providerModel;
    constructor(providerModel: Model<Provider>);
    addProvider(createProviderDTO: ProviderDto): Promise<Provider>;
    getProvider(providerID: any): Promise<Provider>;
    updateProvider(providerID: any, data: any): Promise<Provider>;
    deleteProvider(providerID: any): Promise<any>;
    getAllProvider(): Promise<Provider[]>;
}
