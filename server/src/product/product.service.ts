import { Injectable } from "@nestjs/common";
import { TestUser} from '../database/user.entity'
import { ProdBody, ProductDto} from "src/dto/product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TestProduct } from "src/database/product.entity";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { UserBask, UserDto } from "src/dto/user.dto";
import { TestBask } from "src/database/bask.entity";
import { BaskDto } from "src/dto/bask.dto";

@Injectable()
export class ProductService {
    constructor(
      @InjectRepository(TestProduct)
      private readonly products:Repository<TestProduct>,
      @InjectRepository(TestUser)
      private readonly users:Repository<TestUser>,
      @InjectRepository(TestBask)
      private readonly bask:Repository<TestBask>
    ){}

    async getProducts():Promise<ProductDto[]>{
      return this.products.find();
    }

    async addProductToBask({userId,productId}:ProdBody):Promise<TestBask>{
      const user:UserDto = await this.users.findOneBy({id:userId});
      const baskItem:BaskDto = await this.bask.findOneBy({user,productId});
      if (baskItem){
        const count:number = baskItem.count + 1;
        const bask:UpdateResult = await this.bask.update({productId,user},{count});
        return bask.raw;
      }
      const products:Omit<BaskDto,"bask_id"> = {
        productId,
        count:1,
        user
      };
      const newBask:TestBask = this.bask.create(products);
      return this.bask.save(newBask);
    }

    async delProductFromBask({userId,productId}:ProdBody):Promise<TestBask>{
      const user: UserDto = await this.users.findOneBy({ id: userId });
      const baskItem:BaskDto = await this.bask.findOneBy({user,productId});
      if (baskItem.count > 1){
        const count:number = baskItem.count - 1;
        const bask:UpdateResult = await this.bask.update({productId,user},{count});
        return bask.raw;
      };
      return this.bask.remove(baskItem);
    }

    async clearProductBask(id:string):Promise<TestBask>{
      const user:TestUser = await this.users.findOneBy({id});
      const bask:DeleteResult = await this.bask.delete({user});
      return bask.raw
    }

    async getUserBask(id:string):Promise<UserBask[]>{
      const user:UserDto = await this.users.findOneBy({id});
      const bask:BaskDto[] = await this.bask.findBy({user});
      const products:ProductDto[] = await this.products.find();
      return bask.map((i:BaskDto)=>{
        const product:ProductDto = products
        .find((el:ProductDto)=>el.id == i.productId);
        return {
          count:i.count,
          product:product
        }
      });
    }
}