import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { Ward } from 'src/modules/ward/schema/ward.entity';

@Table({ timestamps: true })
export class Citizen extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  fullname: string;

  @Column({ allowNull: false })
  address: string;

  @Column({ allowNull: false })
  gender: string;

  @Column({ allowNull: false })
  phone: string;

  @ForeignKey(() => Ward)
  @Column({ allowNull: false })
  wardId: string;

  @Column({ allowNull: false })
  timestamp: string;
}
