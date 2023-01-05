import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCraDto } from './dto/create-cra.dto';
import { Cra } from './entities/cra.entity';

@Injectable()
export class CraService {
  constructor(
    @InjectRepository(Cra)
    private craRepository: Repository<Cra>,
  ) {}

  async createCra(createCraDto: CreateCraDto) {
    console.log('Et voici:', createCraDto);
  }
}
