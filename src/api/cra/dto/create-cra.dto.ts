import { Type } from 'class-transformer';
import {
  ArrayMinSize, IsArray, IsString, ValidateNested,
} from 'class-validator';
import { CreateCraDayDto } from 'src/api/cra-days/dto/create-cra-day.dto';

export class CreateCraDto {
  @IsString()
    society: string;

  @IsString()
    collaborator: string;

  @IsString()
    beginingDate: string;

  @IsString()
    endDate: string;

  @IsString()
    providerVisa: string;

  @IsString()
    clientVisa: string;

  @IsArray()
  @ArrayMinSize(6)
  @ValidateNested({ each: true })
  @Type(() => CreateCraDayDto)
    craDays: CreateCraDayDto[];
}
