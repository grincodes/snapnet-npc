import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateStateDto {
  @ApiProperty()
  @IsString()
  name: string;
  timestamp: number;
}
