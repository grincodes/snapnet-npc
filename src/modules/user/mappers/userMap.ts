import { Mapper } from 'src/infra/mapper';
import { User } from '../schema/user.entity';

export class UserMapper extends Mapper<User> {
  public static removePasswordInUser(
    user: any,
  ): Omit<User, 'password' | 'createdAt' | 'updatedAt'> {
    return user;
  }

  public static removePasswordInUsersPagination(paginationResponse: any) {
    const newRes = { ...paginationResponse };
    const rows = newRes.rows.map((user) => {
      return UserMapper.removePasswordInUser(user);
    });
    newRes.rows = rows;

    return newRes;
  }
}
