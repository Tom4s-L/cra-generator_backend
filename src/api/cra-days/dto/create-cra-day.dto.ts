import {
  IsBoolean, IsEnum, IsOptional, IsString,
} from 'class-validator';
import { PresenceEnum } from '../entities/cra-day.entity';

export class CreateCraDayDto {
  @IsString()
    name: string;

  @IsString()
    date: string;

  @IsEnum(PresenceEnum)
    morning: PresenceEnum;

  @IsEnum(PresenceEnum)
    afternoon: PresenceEnum;

  @IsBoolean()
    remote: boolean;

  @IsOptional()
  @IsString()
    comment: string;
}
