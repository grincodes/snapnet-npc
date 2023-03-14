import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { StateRepository } from './state.repo';

@Injectable()
export class StatesService {
  constructor(private readonly stateRepo: StateRepository) {}
  async createState(createStateDto: CreateStateDto) {
    const res = await this.stateRepo.create(createStateDto);
    return res;
  }

  async findAll(page?: number, size?: number) {
    const res = await this.stateRepo.paginate(page, size);
    return res;
  }
}
