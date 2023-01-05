import {
  Body, Controller, Logger, Post,
} from '@nestjs/common';
import { SuccessResponse } from 'src/commons/response/success-response';
import { CraService } from './cra.service';
import { CreateCraDto } from './dto/create-cra.dto';
import { mapCraErrorToHttpError } from './exceptions/cra.error.map';

@Controller('cra')
export class CraController {
  private logger = new Logger(CraController.name);

  constructor(private readonly craService: CraService) {}

  @Post('create')
  async create(@Body() createCraDto: CreateCraDto) {
    try {
      const cra = await this.craService.createCra(createCraDto);
      return new SuccessResponse(cra);
    } catch (error) {
      this.logger.error(error);
      const mappedError = mapCraErrorToHttpError(error);
      if (!mappedError) {
        this.logger.error('Caught server error', error);
        throw error;
      }
      throw mappedError;
    }
  }
}
