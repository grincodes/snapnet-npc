import { Injectable } from '@nestjs/common';
import { CitizenRepository } from './citizen.repo';
import { CreateCitizenDto } from './dto/create-citizen.dto';

@Injectable()
export class CitizenService {
  constructor(private readonly citizenRepo: CitizenRepository) {}

  async createCitizen(createCitizenDto: CreateCitizenDto) {
    return this.citizenRepo.create(createCitizenDto);
  }

  async findAll(page?: number, size?: number) {
    const res = await this.citizenRepo.paginate(page, size);
    return res;
  }
}
