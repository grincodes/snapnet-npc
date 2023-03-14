import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(25)
  @ApiProperty()
  name: string;

  @IsEmail()
  @MaxLength(50)
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(6)
  @ApiProperty({
    description: 'password should be equal or greater than 6 characters',
  })
  password: string;

  @IsOptional()
  timestamp: number;
}
