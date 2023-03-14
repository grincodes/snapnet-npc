import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
  Query,
  BadRequestException,
  Req,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';

@ApiBearerAuth('access-token')
@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('register')
  async create(@Req() req: any, @Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);

    return {
      email: user.email,
      msg: 'User successfully registered',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('/all-users')
  findAll(@Query('page') page: number, @Query('size') size: number) {
    return this.usersService.findAll(page, size);
  }

  @Get(':id')
  findOne(@Param('id') userId: string) {
    return this.usersService.findOne(+userId);
  }
}
