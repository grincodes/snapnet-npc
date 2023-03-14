import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsPhoneNumber, IsString } from 'class-validator';

export class CreateCitizenDto {
  @ApiProperty()
  @IsString()
  fullname: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty()
  @IsNumberString()
  wardId: number;

  timestamp = Math.floor(Date.now() / 1000);
}
