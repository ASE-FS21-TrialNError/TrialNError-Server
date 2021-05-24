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
import { Wishlist } from '../wishlist/models/wishlist';
import { WishlistModule } from '../wishlist/wishlist.module';

@Module({
  imports: [
    TypegooseModule.forFeature([
      UserAuth,
      EmailVerification,
      Wishlist
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
    WishlistModule,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
