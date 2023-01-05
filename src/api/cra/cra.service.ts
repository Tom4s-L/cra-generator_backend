import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCraDto } from './dto/create-cra.dto';
import { Cra } from './entities/cra.entity';

export enum PresenceEnum {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
}

@Injectable()
export class CraService {
  constructor(
    @InjectRepository(Cra)
    private craRepository: Repository<Cra>,
  ) {}

  async createCra(createCraDto: CreateCraDto): Promise<Cra> {
    const existingCra = await this.craRepository.findOne({
      where: {
        beginingDate: createCraDto.beginingDate,
        endDate: createCraDto.endDate,
      },
    });

    if (existingCra) {
      // TODO: créer erreur dediée

      throw new Error('Already exist');
    }

    const craToStore = {
      ...createCraDto,
      presenceHalfDays: this.calculateHalfDaysPresence(createCraDto),
      absenceHalfDays: this.calculateHalfDaysAbsence(createCraDto),
    };

    const newCra = this.craRepository.create(craToStore);
    return this.craRepository.save(newCra);
  }

  calculateHalfDaysPresence(createCraDto: CreateCraDto): number {
    const presentMoringsNumber: number = createCraDto.craDays.filter(
      (day) => day.morning === PresenceEnum.PRESENT,
    ).length;

    const presentAfternoonsNumber: number = createCraDto.craDays.filter(
      (day) => day.afternoon === PresenceEnum.PRESENT,
    ).length;

    return presentMoringsNumber + presentAfternoonsNumber;
  }

  calculateHalfDaysAbsence(createCraDto: CreateCraDto): number {
    const absentMoringsNumber: number = createCraDto.craDays.filter(
      (day) => day.morning === PresenceEnum.ABSENT,
    ).length;

    const absentAfternoonsNumber: number = createCraDto.craDays.filter(
      (day) => day.afternoon === PresenceEnum.ABSENT,
    ).length;

    return absentMoringsNumber + absentAfternoonsNumber;
  }
}
