import {
  IsBoolean, IsOptional, IsString,
} from 'class-validator';

export class CreateCraDayDto {
  @IsString()
    name: string;

  @IsString()
    date: string;

  @IsBoolean()
    morning: boolean;

  @IsBoolean()
    afternoon: boolean;

  @IsBoolean()
    remote: boolean;

  @IsOptional()
  @IsString()
    comment: string;
}
