import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuardView extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const isLoggedIn = super.canActivate(context) && request.user;

    if (!isLoggedIn) {
      res.redirect('/login');
      return false;
    }

    return true;
  }
}
