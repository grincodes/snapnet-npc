import { Controller, Post } from '@nestjs/common';
import { CreateLgaDto } from './dto/create-lga.dto';
import { LgaService } from './lga.service';

@Controller('lga')
export class LgaController {
  constructor(private readonly lgaService: LgaService) {}

  @Post()
  async createLga(createLgaDto: CreateLgaDto) {
    return this.lgaService.createLga(createLgaDto);
  }
}
