import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Password } from 'src/shared/password';
import { ChangePasswordDto } from './dto/change-password.dto';

import { CreateUserDto } from './dto/create-user.dto';
import { UserMapper } from './mappers/userMap';
import { User } from './schema/user.entity';
import { UsersRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const emailExists = await this.usersRepository.emailExists(
      createUserDto.email,
    );

    if (emailExists) {
      throw new HttpException('email already exists', HttpStatus.CONFLICT);
    }

    try {
      createUserDto.timestamp = Math.floor(Date.now() / 1000);

      createUserDto.password = Password.hashPassword(createUserDto.password);
      await this.usersRepository.create(createUserDto);

      const { password, ...user } = createUserDto;
      return user;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.mfindByEmail(email);

    if (user) {
      const isValidPass = Password.bcryptCompare(password, user.password);
      if (isValidPass) {
        const { password, ...result } = user;
        return result;
      }
    }

    return null;
  }
  // async fetchUsers(offset: number, limit: number) {
  //   return await this.usersRepository.fetchUsers(+offset - 1, limit);
  // }

  async findAll(page?: number, size?: number) {
    const res = await this.usersRepository.paginate(page, size);
    return UserMapper.removePasswordInUsersPagination(res);
  }

  async findOne(userId: number) {
    const user = await this.usersRepository.findOne(userId);
    return UserMapper.removePasswordInUser(user);
  }

  async setCurrentRefreshToken(refreshToken: string, userId: number) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    console.log('hashed');

    return await this.usersRepository.update(
      { currentHashedRefreshToken },
      { id: userId },
    );
  }

  async removeRefreshToken(userId: number) {
    const res = await this.usersRepository.update(
      {
        currentHashedRefreshToken: null,
      },
      { id: userId },
    );

    return res;
  }
  async getUserIfRefreshTokenMatches(refreshToken: string, userId: number) {
    const user = await this.findOne(userId);

    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.currentHashedRefreshToken,
    );

    if (isRefreshTokenMatching) {
      return user;
    }
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    return UserMapper.removePasswordInUser(user);
  }

  async mfindByEmail(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    return user;
  }

  async changePassword(
    userId: string,
    changePasswordDto: ChangePasswordDto,
  ): Promise<boolean> {
    const password = Password.hashPassword(changePasswordDto.password);

    await this.usersRepository.update(
      { password: changePasswordDto.password },
      { userId },
    );
    return true;
  }

  async delete(userId: string) {
    const res = await this.usersRepository.delete({ userId });
    return res;
  }

  async deleteMany(userIds: string[]) {
    await this.usersRepository.deleteMany({ userId: userIds });
  }
}
