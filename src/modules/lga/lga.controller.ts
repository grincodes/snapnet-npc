import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';
import { CreateLgaDto } from './dto/create-lga.dto';
import { LgaService } from './lga.service';

@ApiTags('Lga')
@Controller('lga')
export class LgaController {
  constructor(private readonly lgaService: LgaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createLga(createLgaDto: CreateLgaDto) {
    return this.lgaService.createLga(createLgaDto);
  }

  @Get()
  findAll(@Query('page') page: number, @Query('size') size: number) {
    return this.lgaService.findAll(page, size);
  }
}
