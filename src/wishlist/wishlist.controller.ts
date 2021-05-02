import { Controller, Get, UseGuards,Query,ParseIntPipe, Param,Body, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { JwtAuthGaurd } from '../common/utils/helpers';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthUser } from '../common/decorators/auth-user.decorator';
import { UserDto } from '../users/dto/user.dto';


@ApiBearerAuth()
@UseGuards(JwtAuthGaurd())
@Controller('wishlist')
export class WishListController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get('add/:id') 
  add(
    @AuthUser() user: UserDto,
    @Param('id') appID: string,
  ){
      return this.wishlistService.addApp(appID,user);
    }
    @Get('delete/:id') 
    delete(
      @AuthUser() user: UserDto,
      @Param('id') appID: string,
    ){
        return this.wishlistService.deleteApp(appID,user);
      }
}
