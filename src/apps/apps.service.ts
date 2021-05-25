import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { Apps } from './models/apps';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { PaginatedResponse } from 'src/common/interface/paginated.response';

@Injectable()
export class AppsService {
  constructor(
    @InjectModel(Apps) 
    private readonly appsModel: ReturnModelType<typeof Apps>,
  ) {}

  async getAllApps(
    page: number = 1,
    limit: number = 10,
    sort: string ,
    name:string,
    category_andr: string ,
    category_ios: string ,
    price_andr: string ,
    price_ios: string ,
    rating_andr: string ,
    rating_ios: string ,
    rating_count_andr: string ,
    rating_count_ios: string ,
    content_rating_andr: string ,
    content_rating_ios: string ,
  ): Promise<PaginatedResponse<Apps>> {

    
    let  filter = { };
    filter =!category_andr?filter: { ...filter, category_andr};
    filter =!category_ios?filter: { ...filter, category_ios};
    filter =!price_andr?filter: (this.getFieldRange(price_andr).$lt?{ ...filter, price_andr:this.getFieldRange(price_andr)}:filter);
    filter =!price_ios?filter: (this.getFieldRange(price_ios).$lt?{ ...filter, price_ios:this.getFieldRange(price_ios)}:filter);
    filter =!rating_andr?filter: (this.getFieldRange(rating_andr).$lt?{ ...filter, rating_andr:this.getFieldRange(rating_andr)}:filter);
    filter =!rating_ios?filter: (this.getFieldRange(rating_ios).$lt?{ ...filter, rating_ios:this.getFieldRange(rating_ios)}:filter);
    filter =!rating_count_andr?filter: (this.getFieldRange(rating_count_andr).$lt?{ ...filter, rating_count_andr:this.getFieldRange(rating_count_andr)}:filter);
    filter =!rating_count_ios?filter: (this.getFieldRange(rating_count_ios).$lt?{ ...filter, rating_count_ios:this.getFieldRange(rating_count_ios)}:filter);
    filter =!content_rating_andr?filter: { ...filter, content_rating_andr};
    filter =!content_rating_ios?filter: { ...filter, content_rating_ios};


    if(name){
      filter= { ...filter, name:{$regex: name, $options: 'i'}};
    }
    let  sortFilter =  { page, limit,sort:{}};
    if(sort)
    {
      let splittedSort=sort.split("-", 2);
      if(splittedSort.length==2)
      {
        if(splittedSort[1]=='D')
        {
          sortFilter={...sortFilter,sort:{ [splittedSort[0]]: -1 }}
          filter= { ...filter, [splittedSort[0]]: {$exists: true,$gt: -1}}
         
        } else if(splittedSort[1]=='A')
        {
          
          sortFilter={...sortFilter,sort:{ [splittedSort[0]]: 1 }}
          filter= { ...filter, [splittedSort[0]]: {$exists: true,$gt: -1}}
        }
      }
    }
    const result = await this.appsModel.paginate(
      filter,
      sortFilter
    );
    return {
      totalPages: result.pages,
      items: result.docs,
      total: result.total,
    };
  }
  getFieldRange(rangeField :string){
    var splittedRange = rangeField.split("_", 2); 
    var $gt: number = +splittedRange[0];
    var $lt: number = +splittedRange[1];
    if( splittedRange.length!=2|| $gt==NaN||$lt ==NaN ||$gt>$lt ){
      return {}
    }
    return { $gt , $lt }
  }

  async getAppByID(appId: string) : Promise<Apps>
    {
      const result = await this.appsModel.findById(appId)
            .catch(err => {
              throw new HttpException('App not found', HttpStatus.NOT_FOUND);
            })
            .then(result => result);
          return result;
    }

  }
