import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from './schema/user.entity';
import { UserController } from './user.controller';
import { UsersRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UsersRepository],
  exports: [UserService, UsersRepository],
})
export class UserModule {}
