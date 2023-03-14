import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';
import { CreateWardDto } from './dto/create-ward.dto';
import { WardService } from './ward.service';

@ApiTags('Ward')
@Controller('ward')
export class WardController {
  constructor(private readonly wardService: WardService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createWard(@Body() createWardDto: CreateWardDto) {
    await this.wardService.createWard(createWardDto);
  }

  @Get()
  findAll(@Query('page') page: number, @Query('size') size: number) {
    return this.wardService.findAll(page, size);
  }
}
