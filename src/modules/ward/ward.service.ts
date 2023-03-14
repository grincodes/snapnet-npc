import { Injectable } from '@nestjs/common';
import { CreateWardDto } from './dto/create-ward.dto';
import { WardRepository } from './ward.repo';

@Injectable()
export class WardService {
  constructor(private readonly wardRepo: WardRepository) {}
  async createWard(createWardDto: CreateWardDto) {
    createWardDto.timestamp = Math.floor(Date.now() / 1000);
    const res = await this.wardRepo.create(createWardDto);
    return res;
  }

  async findAll(page?: number, size?: number) {
    const res = await this.wardRepo.paginate(page, size);
    return res;
  }
}
