import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { Wishlist } from './models/wishlist';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserDto } from '../users/dto/user.dto';
import { ResponseSuccess } from '../common/dto/response.dto';
import { Apps} from '../apps/models/apps';


@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Wishlist) 
    private readonly wishlistModel: ReturnModelType<typeof Wishlist>,
    @InjectModel(Apps) 
    private readonly appsModel: ReturnModelType<typeof Apps>,
  ) {}
  async addApp(appId: string,user: UserDto) {
      const wishList = await this.wishlistModel.findOne({userEmail:user.email})
            .catch(err => {
              throw new HttpException('WishList Not Found', HttpStatus.NOT_FOUND);
            })
            .then(result => result);
      await this.appsModel.findById(appId)
      .catch(err => {
        throw new HttpException('App not found', HttpStatus.NOT_FOUND);
      })
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
          await this.appsModel.findById(appId)
          .catch(err => {
            throw new HttpException('App not found', HttpStatus.NOT_FOUND);
          })
    let apps=wishList.apps;
    const index = apps.indexOf(appId);
      if (index > -1) {
        apps.splice(index, 1);
      }
    await this.wishlistModel.findByIdAndUpdate(wishList._id,{apps})
    return new ResponseSuccess<void>('APP DELETED FROM WISHLIST');
  }
}
