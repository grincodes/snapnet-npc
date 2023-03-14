import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CitizenController } from './citizen.controller';
import { CitizenRepository } from './citizen.repo';
import { CitizenService } from './citizen.service';
import { Citizen } from './schema/citizen.entity';

@Module({
  imports: [SequelizeModule.forFeature([Citizen])],
  controllers: [CitizenController],
  providers: [CitizenService, CitizenRepository],
})
export class CitizenModule {}
