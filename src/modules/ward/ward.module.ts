import { Module } from '@nestjs/common';
import { WardService } from './ward.service';
import { WardController } from './ward.controller';
import { WardRepository } from './ward.repo';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ward } from './schema/ward.entity';

@Module({
  imports: [SequelizeModule.forFeature([Ward])],
  providers: [WardService, WardRepository],
  controllers: [WardController],
})
export class WardModule {}
