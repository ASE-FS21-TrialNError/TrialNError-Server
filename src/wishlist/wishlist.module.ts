import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Wishlist } from './models/wishlist';
import { WishListController } from './wishlist.controller';


@Module({
  imports: [TypegooseModule.forFeature([Wishlist])],
  providers: [WishlistService],
  controllers: [WishListController],
  exports: [WishlistService],
})
export class WishlistModule {}
