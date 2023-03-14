import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EntityRepository } from 'src/infra/entity.repository';
import { Citizen } from './schema/citizen.entity';

@Injectable()
export class CitizenRepository extends EntityRepository<Citizen> {
  constructor(@InjectModel(Citizen) private citizenModel: typeof Citizen) {
    super(citizenModel);
  }

  public async findOne(id: number): Promise<any> {
    if (!id) {
      throw new BadRequestException('citizen is not provided');
    }
    const citizen = await this.citizenModel.findOne({
      where: {
        id,
      },
    });
    if (!citizen) {
      throw new BadRequestException('citizen not found');
    }

    return citizen;
  }
}
