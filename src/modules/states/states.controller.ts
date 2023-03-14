import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';
import { CreateStateDto } from './dto/create-state.dto';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
  constructor(private readonly stateService: StatesService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async createState(@Body() createStateDto: CreateStateDto) {
    return this.stateService.createState(createStateDto);
  }

  @Get()
  findAll(@Query('page') page: number, @Query('size') size: number) {
    return this.stateService.findAll(page, size);
  }
}
