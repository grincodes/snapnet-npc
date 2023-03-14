import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: true })
export class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ unique: true, allowNull: false })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ allowNull: true })
  currentHashedRefreshToken: string;

  @Column({ allowNull: false })
  timestamp: string;
}
