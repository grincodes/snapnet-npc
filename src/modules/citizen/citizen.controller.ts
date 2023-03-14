import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';
import { CitizenService } from './citizen.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';

@ApiTags('Citizen')
@Controller('citizen')
export class CitizenController {
  constructor(private readonly citizenService: CitizenService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createCitizen(createCitizenDto: CreateCitizenDto) {
    const res = await this.citizenService.createCitizen(createCitizenDto);
    return res;
  }

  @Get()
  findAll(@Query('page') page: number, @Query('size') size: number) {
    return this.citizenService.findAll(page, size);
  }
}
