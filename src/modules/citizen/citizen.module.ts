import { Module } from '@nestjs/common';
import { CitizenController } from './citizen.controller';
import { CitizenService } from './citizen.service';

@Module({
  controllers: [CitizenController],
  providers: [CitizenService, CitizenModule],
})
export class CitizenModule {}
