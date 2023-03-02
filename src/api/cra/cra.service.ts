import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CraDay } from '../cra-days/entities/cra-day.entity';
import { CreateCraDto } from './dto/create-cra.dto';
import { Cra } from './entities/cra.entity';
import { CraAlreadyExistException } from './exceptions/already-exist/already-exists.exception';

type FindAllOption = {
  relations: string[]
};

export enum PresenceEnum {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
}

@Injectable()
export class CraService {
  constructor(
    @InjectRepository(Cra)
    private craRepository: Repository<Cra>,
    @InjectRepository(CraDay)
    private craDayRepository: Repository<CraDay>,
  ) {}

  async findAll(findAllOption: FindAllOption): Promise<Cra[]> {
    const relations = (findAllOption.relations || []);
    const allCras = await this.craRepository.find({ relations });

    return allCras;
  }

  async createCra(createCraDto: CreateCraDto): Promise<Cra> {
    const existingCra: Cra = await this.craRepository.findOne({
      where: {
        beginingDate: createCraDto.beginingDate,
        endDate: createCraDto.endDate,
      },
    });

    const craId: string = existingCra?.id;

    if (existingCra) {
      throw new CraAlreadyExistException({
        craId,
      });
    }

    const craToStore = {
      ...createCraDto,
      presenceHalfDays: this.calculateHalfDaysPresence(createCraDto),
      absenceHalfDays: this.calculateHalfDaysAbsence(createCraDto),
    };

    const newCra = this.craRepository.create(craToStore);
    const savedCra = await this.craRepository.save(newCra);

    await this.craDayRepository.save(
      createCraDto.craDays.map((craDay) => ({ ...craDay, cra: savedCra })),
    );

    return savedCra;
  }

  calculateHalfDaysPresence(createCraDto: CreateCraDto): number {
    const presentMoringsNumber: number = createCraDto.craDays.filter(
      (day) => day.morning === true,
    ).length;

    const presentAfternoonsNumber: number = createCraDto.craDays.filter(
      (day) => day.afternoon === true,
    ).length;

    return presentMoringsNumber + presentAfternoonsNumber;
  }

  calculateHalfDaysAbsence(createCraDto: CreateCraDto): number {
    const absentMoringsNumber: number = createCraDto.craDays.filter(
      (day) => day.morning === false,
    ).length;

    const absentAfternoonsNumber: number = createCraDto.craDays.filter(
      (day) => day.afternoon === false,
    ).length;

    return absentMoringsNumber + absentAfternoonsNumber;
  }
}
