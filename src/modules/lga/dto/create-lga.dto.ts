import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, isNumberString, IsString } from 'class-validator';

export class CreateLgaDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumberString()
  stateId: string;

  timestamp: number;
}
