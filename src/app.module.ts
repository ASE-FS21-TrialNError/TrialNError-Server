import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppsModule } from './/apps/apps.module';
import { AuthModule } from './auth/auth.module';
import { ENV_KEYS } from './common/constants/application.contants'
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

/* Module imports all Globel Configuration like Host, Port  */

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>(ENV_KEYS.SMTP_HOST),  // Set the SMTO Host for our email Server 
          port: configService.get<string>(ENV_KEYS.SMTP_PORT), // Set the SMTO PORT for our email Server 
          auth: {
            user: configService.get<string>(ENV_KEYS.SMTP_USER), // Set the SMTO USername for our email Server 
            pass: configService.get<string>(ENV_KEYS.SMTP_PASSWORD),// Set the SMTO Passsword for our email Server 
          },
        },
        defaults: {
          from: '"TrailNError Support" <trailNError@gmail.com>',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new HandlebarsAdapter(), // or new PugAdapter()
          options: {
            strict: true,
          },
        },
      }),
    }),
    TypegooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get(ENV_KEYS.MONGODB_URI),// Set the MongoDB source from .env file
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }),
    }),
    UsersModule,
    AuthModule,
    AppsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
