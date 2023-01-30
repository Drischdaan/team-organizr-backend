import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {

  constructor(
    private readonly config: ConfigService
  ) {
    super({
      clientID: config.get<string>('GITHUB_CLIENT_ID'),
      clientSecret: config.get<string>('GITHUB_CLIENT_SECRET'),
      callbackURL: config.get<string>('GITHUB_AUTH_CALLBACK'),
    });
  }

  public async validate(accessToken: string, refreshToken: string, profile, done) {
    const account = {
      username: profile.username,
      displayName: profile.displayName,
      avatarUrl: profile._json.avatar_url,
    };
    return account;
  }

}
