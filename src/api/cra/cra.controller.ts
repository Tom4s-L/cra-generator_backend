import { Body, Controller, Post } from '@nestjs/common';
import { SuccessResponse } from 'src/commons/response/success-response';
import { CraService } from './cra.service';
import { CreateCraDto } from './dto/create-cra.dto';

@Controller('cra')
export class CraController {
  constructor(private readonly craService: CraService) {}

  @Post('create')
  async create(@Body() createCraDto: CreateCraDto) {
    try {
      const cra = this.craService.createCra(createCraDto);
      return new SuccessResponse(cra);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
