import { Injectable } from '@nestjs/common';
import { CreateWardDto } from './dto/create-ward.dto';
import { WardRepository } from './ward.repo';

@Injectable()
export class WardService {
  constructor(private readonly wardRepo: WardRepository) {}
  async createState(createWardDto: CreateWardDto) {
    const res = await this.wardRepo.create(createWardDto);
    return res;
  }
}
