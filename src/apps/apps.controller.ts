import { Controller, Get, UseGuards,Query,ParseIntPipe } from '@nestjs/common';
import { AppsService } from './apps.service';
import { Apps } from './models/apps';
import { AuthUser } from 'src/common/decorators/auth-user.decorator';
import { JwtAuthGaurd } from 'src/common/utils/helpers';
import { ApiBearerAuth } from '@nestjs/swagger';


@ApiBearerAuth()
@UseGuards(JwtAuthGaurd())
@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Get()
  getAllOrders(
    @Query('page', new ParseIntPipe()) page?: number,
    @Query('limit', new ParseIntPipe()) limit?: number,
    @Query('category_andr') category_andr?: string,
  ) {
    return this.appsService.getAllApps(category_andr, page, limit);
  }
}
