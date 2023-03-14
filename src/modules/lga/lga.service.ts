import { Injectable } from '@nestjs/common';
import { CreateLgaDto } from './dto/create-lga.dto';
import { LgaRepository } from './lga.repo';

@Injectable()
export class LgaService {
  constructor(private readonly stateRepo: LgaRepository) {}
  async createLga(createLgaDto: CreateLgaDto) {
    const res = await this.stateRepo.create(createLgaDto);
    return res;
  }

  async findAll(page?: number, size?: number) {
    const res = await this.stateRepo.paginate(page, size);
    return res;
  }
}
