import { ProviderDto } from './dto/provider.dto';
import { ProvidersService } from './providers.service';
import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Put,
  NotFoundException,
  Delete,
  Param,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('providers')
export class ProvidersController {
  constructor(private providerService: ProvidersService) {}

  @Post()
  async addProvider(@Res() res, @Body() createProviderDto: ProviderDto) {
    try {
      const provider = await this.providerService.addProvider(createProviderDto);
      return res.status(HttpStatus.OK).json({
        msg: 'Provider has been created successfully',
        provider
      });
    } catch (e) {
      return res.status(HttpStatus.CONFLICT).json({
        msg: 'Provider already exists'
      });
    }
  }

  @UseGuards(AuthGuard())
  @Get(':providerID')
  async getProvider(@Res() res, @Param('providerID') providerID) {
    const provider = await this.providerService.getProvider(providerID);
    if (!provider) throw new NotFoundException('Provider does not exist!');
    return res.status(HttpStatus.OK).json(provider);
  }

  @UseGuards(AuthGuard())
  @Put(':providerID')
  async updateProvider(
    @Res() res,
    @Param('providerID') providerID,
    @Body() createProviderDto: ProviderDto,
  ) {
    const provider = await this.providerService.updateProvider(providerID, createProviderDto);
    if (!provider) throw new NotFoundException('Provider does not exist!');
    return res.status(HttpStatus.OK).json({
      msg: 'Provider has been successfully updated',
      provider,
    });
  }

  @UseGuards(AuthGuard())
  @Delete(':providerID')
  async deleteProvider(@Res() res, @Param('providerID') providerID) {
    const provider = await this.providerService.deleteProvider(providerID);
    if (!provider) throw new NotFoundException('Provider does not exist');
    return res.status(HttpStatus.OK).json({
      msg: 'Provider has been deleted',
      provider,
    });
  }

  @UseGuards(AuthGuard())
  @Get()
  async getAllProvider(@Res() res) {
    const providers = await this.providerService.getAllProvider();
    return res.status(HttpStatus.OK).json(providers);
  }
}
