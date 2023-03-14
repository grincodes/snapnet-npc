import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true })
export class State extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  timestamp: string;
}
