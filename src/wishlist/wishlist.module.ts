import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Wishlist } from './models/wishlist';
import { WishListController } from './wishlist.controller';
import { Apps} from '../apps/models/apps';
import { AppsModule} from '../apps/apps.module';


@Module({
  imports: [TypegooseModule.forFeature([Wishlist,Apps]),AppsModule],
  providers: [WishlistService],
  controllers: [WishListController],
  exports: [WishlistService],
})
export class WishlistModule {}
