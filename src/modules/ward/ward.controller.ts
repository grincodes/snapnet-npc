import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateWardDto } from './dto/create-ward.dto';
import { WardService } from './ward.service';

@ApiTags('Ward')
@Controller('ward')
export class WardController {
  constructor(private readonly wardService: WardService) {}
  @Post()
  async createWard(createWardDto: CreateWardDto) {
    await this.wardService.createWard(createWardDto);
  }

  @Get()
  findAll(@Query('page') page: number, @Query('size') size: number) {
    return this.wardService.findAll(page, size);
  }
}
