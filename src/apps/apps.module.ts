import { Module } from '@nestjs/common';
import { AppsService } from './apps.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Apps } from './models/apps';
import { AppsController } from './apps.controller';

@Module({
  imports: [TypegooseModule.forFeature([Apps])],
  providers: [AppsService],
  controllers: [AppsController],
  exports: [AppsService],
})
export class AppsModule {}
