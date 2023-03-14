import { SetMetadata } from '@nestjs/common';
import { Role } from './role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

//... roles get all args from decorator and restrict it  to a type of Role enum
//Setmetadata helps save the roles passed in as args in a kind of key value pair
// on the decorator object
