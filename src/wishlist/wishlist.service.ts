import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { Wishlist } from './models/wishlist';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { UserDto } from '../users/dto/user.dto';
import { ResponseSuccess } from '../common/dto/response.dto';
import { Apps} from '../apps/models/apps';
import { PaginatedResponse } from '../common/interface/paginated.response';
import { ObjectId } from 'mongoose';
import {AppseDto} from './dto/apps.dto';

/* This is Service for Get, Add and delete the Wishlist of the user*/

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel(Wishlist) 
    private readonly wishlistModel: ReturnModelType<typeof Wishlist>,
    @InjectModel(Apps) 
    private readonly appsModel: ReturnModelType<typeof Apps>,
  ) {}
  //function to add Apps to wishlist 
  async addApp(appId: ObjectId,user: UserDto) {
    //Get Wishlist object from DB using the email ID 
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
      apps=apps.filter((v, i, a) => a.indexOf(v) === i); // ADD the appId to wishList
      await this.wishlistModel.findByIdAndUpdate(wishList._id,{apps})
      return new ResponseSuccess<void>('APP ADDEDED FROM WISHLIST');
  }

  //remove the App from wishlist
  async deleteApp(appId: ObjectId,user: UserDto) {
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
  //Delete Mutiple Apps from wishlist
  async deleteApps(user: UserDto,appsList:AppseDto) {
    const wishList = await this.wishlistModel.findOne({userEmail:user.email})
          .catch(err => {
            throw new HttpException('WishList Not Found', HttpStatus.NOT_FOUND);
          })
          .then(result => result);
        
    let deleteApps=appsList.apps;
    let apps=wishList.apps;
    for(const app of deleteApps) {
      console.log(app)
      const index = apps.indexOf(app);
      if (index > -1) {
        apps.splice(index, 1);
      }
     }
    await this.wishlistModel.findByIdAndUpdate(wishList._id,{apps})
    return new ResponseSuccess<void>('APPS DELETED FROM WISHLIST');
  }

  //Get the List of all appIDs from wishList
  async getAppsInWishlist(user: UserDto) : Promise<Wishlist> {
    return await this.wishlistModel.findOne({userEmail:user.email})
          .catch(err => {
            throw new HttpException('WishList Not Found', HttpStatus.NOT_FOUND);
          })
          .then(result => result);    
  }
   //Get the List of all apps from wishList
  async getApps(user: UserDto) : Promise<Apps[]> {
    const wishlist= await this.wishlistModel.findOne({userEmail:user.email})
          .catch(err => {
            throw new HttpException('WishList Not Found', HttpStatus.NOT_FOUND);
          })
          .then(result => result);    
    return await this.appsModel.find({_id: { $in: wishlist.apps }});
          
  }
}
