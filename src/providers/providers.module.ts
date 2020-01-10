import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProviderSchema } from './schemas/provider.schema';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Provider', schema: ProviderSchema}]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  providers: [ProvidersService],
  controllers: [ProvidersController],
  exports: [ProvidersService]
})
export class ProvidersModule {}
