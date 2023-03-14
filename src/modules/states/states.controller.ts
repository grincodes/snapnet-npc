import { Controller, Post } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
  constructor(private readonly stateService: StatesService) {}

  @Post()
  async createState(createStateDto: CreateStateDto) {
    return this.stateService.createState(createStateDto);
  }
}
