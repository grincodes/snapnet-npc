import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EntityRepository } from 'src/infra/entity.repository';
import { Lga } from './schema/lga.entity';

@Injectable()
export class LgaRepository extends EntityRepository<Lga> {
  constructor(@InjectModel(Lga) private lgaModel: typeof Lga) {
    super(lgaModel);
  }

  public async findOne(id: number): Promise<any> {
    if (!id) {
      throw new BadRequestException('Lga is not provided');
    }
    const lga = await this.lgaModel.findOne({
      where: {
        id,
      },
    });
    if (!lga) {
      throw new BadRequestException('Lga not found');
    }

    return lga;
  }
}
