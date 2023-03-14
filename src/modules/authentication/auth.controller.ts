import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { LogInWithCredentialsGuard } from './login-with-credential.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import RequestWithUser from './requestWithUser.interface';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import JwtRefreshGuard from './jwt-refersh.guard';

@ApiBearerAuth('access-token')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UserService,
  ) {}

  @UseGuards(LogInWithCredentialsGuard)
  @Post('login')
  async login(@Req() req: RequestWithUser, @Body() loginDto: LoginDto) {
    const { user } = req;
    const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(
      user.id,
    );
    const refreshTokenCookie = this.authService.getCookieWithJwtRefreshToken(
      user.id,
    );

    await this.usersService.setCurrentRefreshToken(
      refreshTokenCookie.token,
      user.id,
    );

    req.res.setHeader('Set-Cookie', [
      accessTokenCookie,
      refreshTokenCookie.cookie,
    ]);

    return { user: req.user, msg: 'User logged in', status: 'success' };
  }

  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refresh(@Req() request: RequestWithUser) {
    const accessTokenCookie = this.authService.getCookieWithJwtAccessToken(
      request.user.id,
    );

    request.res.setHeader('Set-Cookie', accessTokenCookie);
    return request.user;
  }

  // @Get('logout')
  // logout(@Req() req: RequestWithUser): any {
  //   req.logOut((err) => {
  //     if (err) {
  //       throw new HttpException(err, HttpStatus.CONFLICT);
  //     }
  //   });
  //   req.session.cookie.maxAge = 0;
  //   return { msg: 'The user logged out' };
  // }
}
