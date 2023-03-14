import { Model } from 'sequelize-typescript';
import { ModelStatic } from 'sequelize/types/model';

export class PaginationResponse<T> {
  rows: T[];
  count: number;
}

export abstract class EntityRepository<T extends Model> {
  constructor(protected readonly entityModel: ModelStatic<T>) {}

  DEFAULT_PAGE = 0;
  DEFAULT_SIZE = 5;

  private createBaseQuery() {
    return {
      where: {},
      include: [],
      order: [],
      limit: 0,
      offset: 0,
    };
  }

  private updateBaseQuery() {
    return {
      where: {},
    };
  }
  private deleteBaseQuery() {
    return {
      where: {},
    };
  }

  async findById(pk: string): Promise<T | null> {
    return this.entityModel.findByPk(pk, {
      raw: true,
    });
  }

  public async exists(id: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where = { id };
    const exists = await this.entityModel.findOne(baseQuery);
    return !!exists === true;
  }

  async findAll(): Promise<T[] | null> {
    return this.entityModel.findAll({
      raw: true,
    });
  }

  async create(createEntityData: any): Promise<T> {
    return this.entityModel.create(createEntityData, {
      raw: true,
    });
  }

  public async update(
    updateEntityData: Record<string, any>,
    entityQuery: Record<string, any>,
  ): Promise<any> {
    const updateQuery = this.updateBaseQuery();
    updateQuery.where = entityQuery;
    const res = await this.entityModel.update(updateEntityData, updateQuery);
    return {
      ...entityQuery,
      response: !!res[0],
    };
  }

  async delete(entityQuery: Record<string, any>): Promise<boolean> {
    const deleteQuery = this.updateBaseQuery();
    deleteQuery.where = entityQuery;
    const count = await this.entityModel.destroy(deleteQuery);
    return count >= 1;
  }

  async deleteMany(entityQuery: Record<string, any>): Promise<boolean> {
    const deleteQuery = this.updateBaseQuery();
    deleteQuery.where = entityQuery;
    const count = await this.entityModel.destroy(deleteQuery);
    return count >= 1;
  }

  public async paginate(
    page: number = this.DEFAULT_PAGE,
    size: number = this.DEFAULT_SIZE,
    entityQuery?: Record<string, any>,
  ): Promise<PaginationResponse<T> | null> {
    const { limit, offset } = this.getPagination(page, size);
    const baseQuery = this.createBaseQuery();
    baseQuery.limit = limit;
    baseQuery.offset = offset;
    baseQuery.where = entityQuery ? entityQuery : {};

    return await this.entityModel.findAndCountAll(baseQuery);
  }

  getPagination = (
    page: number = this.DEFAULT_PAGE,
    size: number = this.DEFAULT_SIZE,
  ) => {
    const limit = +size;
    const offset = page * limit;

    return { limit, offset };
  };

  public async createTransaction() {
    const t = await this.entityModel.sequelize.transaction();
    return t;
  }

  //   async findOneAndUpdate(
  //     entityFilterQuery: FilterQuery<T>,
  //     updateEntityData: UpdateQuery<unknown>,
  //   ): Promise<T | null> {
  //     return this.entityModel.findOneAndUpdate(
  //       entityFilterQuery,
  //       updateEntityData,
  //       {
  //         new: true,
  //       },
  //     );
  //   }

  //   async deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean> {
  //     const deleteResult = await this.entityModel.deleteMany(entityFilterQuery);
  //     return deleteResult.deletedCount >= 1;
  //   }
}
