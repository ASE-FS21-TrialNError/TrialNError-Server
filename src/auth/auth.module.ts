import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuth } from './models/user-auth';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { EmailVerification } from './models/email-verification';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { ENV_KEYS } from '../common/constants/application.contants';

@Module({
  imports: [
    TypegooseModule.forFeature([
      UserAuth,
      EmailVerification,
    ]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const options: JwtModuleOptions = {
          secret: configService.get<string>(ENV_KEYS.JWT_SECRET),
          signOptions: {
            expiresIn: configService.get<string>(ENV_KEYS.JWT_EXPIRES_IN),
          },
        };
        return options;
      },
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
