import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { Wishlist } from './models/wishlist';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserDto } from '../users/dto/user.dto';
import { ResponseSuccess } from 'src/common/dto/response.dto';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Wishlist) 
    private readonly wishlistModel: ReturnModelType<typeof Wishlist>,
  ) {}
  async addApp(appId: string,user: UserDto) {
      const wishList = await this.wishlistModel.findOne({userEmail:user.email})
            .catch(err => {
              throw new HttpException('WishList Not Found', HttpStatus.NOT_FOUND);
            })
            .then(result => result);
      let apps=wishList.apps;
      apps.push(appId);
      apps=apps.filter((v, i, a) => a.indexOf(v) === i);
      await this.wishlistModel.findByIdAndUpdate(wishList._id,{apps})
      return new ResponseSuccess<void>('APP ADDEDED FROM WISHLIST');
  }

  async deleteApp(appId: string,user: UserDto) {
    const wishList = await this.wishlistModel.findOne({userEmail:user.email})
          .catch(err => {
            throw new HttpException('WishList Not Found', HttpStatus.NOT_FOUND);
          })
          .then(result => result);

    let apps=wishList.apps;
    const index = apps.indexOf(appId);
      if (index > -1) {
        apps.splice(index, 1);
      }
    await this.wishlistModel.findByIdAndUpdate(wishList._id,{apps})
    return new ResponseSuccess<void>('APP DELETED FROM WISHLIST');
  }
}
