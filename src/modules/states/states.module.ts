import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { State } from './schema/states.entity';
import { StateRepository } from './state.repo';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';

@Module({
  imports: [SequelizeModule.forFeature([State])],
  controllers: [StatesController],
  providers: [StatesService, StateRepository],
})
export class StatesModule {}
