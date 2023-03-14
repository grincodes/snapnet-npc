import { Controller, Get, Post, Query } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';

@Controller('citizen')
export class CitizenController {
  constructor(private readonly citizenService: CitizenService) {}
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
