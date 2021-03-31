import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { UserDto } from 'src/users/dto/user.dto';
import { ENV_KEYS } from 'src/common/constants/application.contants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(ENV_KEYS.JWT_SECRET),
    });
  }

  async validate(payload: any): Promise<UserDto> {
    const user = await this.usersService.getByEmail(payload.email);
    const {
      firstname,
      lastname,
      email,
      _id,
      id,
    } = user;
    return {
      _id,
      firstname,
      lastname,
      email,
      id,
    };
  }
}
