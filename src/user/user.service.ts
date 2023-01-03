import { Injectable } from '@nestjs/common';

//This should be a real class or interface representing user entity
export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
      roles: ['omomummy'],
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      roles: ['admin'],
    },
  ];

  async findOne(username: string): Promise<User> {
    return this.users.find((user) => user.username === username);
  }
}
