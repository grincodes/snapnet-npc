import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EntityRepository } from 'src/infra/entity.repository';
import { State } from './schema/states.entity';

@Injectable()
export class StateRepository extends EntityRepository<State> {
  constructor(@InjectModel(State) private stateModel: typeof State) {
    super(stateModel);
  }

  public async findOne(id: number): Promise<any> {
    if (!id) {
      throw new BadRequestException('State is not provided');
    }
    const State = await this.stateModel.findOne({
      where: {
        id,
      },
    });
    if (!State) {
      throw new BadRequestException('State not found');
    }

    return State;
  }
}
