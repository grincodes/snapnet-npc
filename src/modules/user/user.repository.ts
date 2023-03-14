import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EntityRepository } from 'src/infra/entity.repository';
import { User } from './schema/user.entity';

@Injectable()
export class UsersRepository extends EntityRepository<User> {
  constructor(@InjectModel(User) private userModel: typeof User) {
    super(userModel);
  }
  async findByEmail(email: string) {
    return await this.userModel.findOne({
      where: {
        email,
      },
    });
  }

  async emailExists(email: string) {
    const res = await this.userModel.findOne({
      where: {
        email,
      },
    });
    return !!res === true;
  }

  public async findOne(id: number): Promise<any> {
    if (!id) {
      throw new BadRequestException('userId is not provided');
    }
    const user = await this.userModel.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new BadRequestException('user not found');
    }
    const { createdAt, updatedAt, password, ...res } = user;
    return res;
  }
}
