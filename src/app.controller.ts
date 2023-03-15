import { Controller, Get, Render, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './modules/authentication/jwt-auth.guard';
import { JwtAuthGuardView } from './views/guards/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private isLoggedIn(req: any): boolean {
    return req.session.user != null; // Check if the user is logged in
  }

  @Get()
  @UseGuards(JwtAuthGuardView)
  @Render('index')
  getHello() {}

  @Get('login')
  @Render('login')
  getLogin(@Res() res: any) {
    return { title: 'Login Page', error: res.error };
  }

  @Get('dashboard')
  @Render('dashboard')
  getDashboard(@Req() req: any) {
    const user = req.user;
    return { user };
  }
}
