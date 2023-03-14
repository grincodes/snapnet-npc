import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { State } from 'src/modules/states/schema/states.entity';

@Table({ timestamps: true })
export class Lga extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @ForeignKey(() => State)
  @Column({ allowNull: false })
  stateId: string;

  @Column({ allowNull: false })
  timestamp: string;
}
