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

  @Get()
  async getAllProvider(@Res() res) {
    const providers = await this.providerService.getAllProvider();
    return res.status(HttpStatus.OK).json(providers);
  }
}
