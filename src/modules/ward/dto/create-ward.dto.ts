import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, isNumberString, IsString } from 'class-validator';

export class CreateWardDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumberString()
  lgaId: string;

  timestamp = Math.floor(Date.now() / 1000);
}
