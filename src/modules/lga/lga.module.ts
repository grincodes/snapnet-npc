import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LgaController } from './lga.controller';
import { LgaRepository } from './lga.repo';
import { LgaService } from './lga.service';
import { Lga } from './schema/lga.entity';

@Module({
  imports: [SequelizeModule.forFeature([Lga])],
  controllers: [LgaController],
  providers: [LgaService, LgaRepository],
})
export class LgaModule {}
