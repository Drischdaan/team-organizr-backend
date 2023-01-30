import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GithubStrategy } from './strategies/github.strategy';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [PassportModule],
  providers: [GithubStrategy],
  controllers: [AuthController],
})
export class AuthModule { }
