import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Lga } from 'src/modules/lga/schema/lga.entity';

@Table({ timestamps: true })
export class Ward extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @ForeignKey(() => Lga)
  @Column({ allowNull: false })
  lgaId: string;

  @Column({ allowNull: false })
  timestamp: string;
}
