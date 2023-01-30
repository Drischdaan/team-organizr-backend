import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { GithubAuthGuard } from '../guards/github.guards';

@Controller('auth')
export class AuthController {

  @UseGuards(GithubAuthGuard)
  @Get('login/github')
  public async loginGithub(): Promise<void> {

  }

  @UseGuards(GithubAuthGuard)
  @Get('callback/github')
  public async callbackGithub(@Request() request): Promise<any> {
    return request.user;
  }

}
