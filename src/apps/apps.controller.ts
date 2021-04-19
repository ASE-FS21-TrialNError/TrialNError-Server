import { Controller, Get, UseGuards,Query,ParseIntPipe, Param } from '@nestjs/common';
import { AppsService } from './apps.service';
import { JwtAuthGaurd } from 'src/common/utils/helpers';
import { ApiBearerAuth } from '@nestjs/swagger';


@ApiBearerAuth()
@UseGuards(JwtAuthGaurd())
@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Get()
  getAllApps(
    @Query('page', new ParseIntPipe()) page?: number,
    @Query('limit', new ParseIntPipe()) limit?: number,
    @Query('sort') sort?: string,
    @Query('name') name?: string,
    @Query('category_andr') category_andr?: string,
    @Query('category_ios') category_ios?: string,
    @Query('price_ios') price_ios?: string,
    @Query('price_andr') price_andr?: string,
    @Query('rating_ios') rating_ios?: string,
    @Query('rating_andr') rating_andr?: string,
    @Query('rating_count_ios') rating_count_ios?: string,
    @Query('rating_count_andr') rating_count_andr?: string,
    @Query('content_rating_ios') content_rating_ios?: string,
    @Query('content_rating_andr') content_rating_andr?: string,
    
  ) {
    return this.appsService.getAllApps(page, limit,sort,name,category_andr,category_ios,price_andr,price_ios,rating_andr,rating_ios,rating_count_andr,rating_count_ios,content_rating_andr,content_rating_ios);
  }

  @Get(':id')
  getAppByID(
    @Param('id') appID: string,
  ){
      return this.appsService.getAppByID(appID);
    }

}
