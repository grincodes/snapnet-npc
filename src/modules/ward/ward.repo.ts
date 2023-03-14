import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EntityRepository } from 'src/infra/entity.repository';
import { Ward } from './schema/ward.entity';

@Injectable()
export class WardRepository extends EntityRepository<Ward> {
  constructor(@InjectModel(Ward) private wardModel: typeof Ward) {
    super(wardModel);
  }

  public async findOne(id: number): Promise<any> {
    if (!id) {
      throw new BadRequestException('Ward is not provided');
    }
    const Ward = await this.wardModel.findOne({
      where: {
        id,
      },
    });
    if (!Ward) {
      throw new BadRequestException('Ward not found');
    }

    return Ward;
  }
}
