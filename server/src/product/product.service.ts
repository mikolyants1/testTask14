import { Injectable } from "@nestjs/common";
import { TestUser} from '../database/user.entity'
import { ProdBody, ProductDto} from "src/dto/product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TestProduct } from "src/database/product.entity";
import { Repository, UpdateResult } from "typeorm";
import { UserBask, UserDto } from "src/dto/user.dto";

@Injectable()
export class ProductService {
    constructor(
      @InjectRepository(TestProduct) private readonly products:Repository<TestProduct>,
      @InjectRepository(TestUser) private readonly users:Repository<TestUser>
    ){}

    async getProducts():Promise<ProductDto[]>{
      return await this.products.find();
    }

    async addProductToBask({userId,prodId}:ProdBody):Promise<UpdateResult>{
      const user:UserDto = await this.users.findOneBy({id:userId});
      const isOnBask:number = user.products.findIndex((i:number)=>i == prodId);
      if (isOnBask !== -1){
        const count:number[] = user.count
        .map((i:number,idx:number)=> idx == isOnBask ? i + 1 : i);
        return await this.users.update({id:userId},{count});
      }
      const products:number[] = [...user.products,prodId];
      const count:number[] = [...user.count,1];
      console.log(count)
      return await this.users.update({id:userId},{products,count});
    }

    async delProductFromBask(userId:number,prodId:number):Promise<UpdateResult>{
    const user: UserDto = await this.users.findOneBy({ id: userId });
    const moreOne: number = user.products.findIndex((i: number) => i == prodId);
    if (user.count[moreOne] > 1){
        const count:number[] = user.count
        .map((i:number,idx:number)=>idx == moreOne ? i - 1 : i); 
        return await this.users.update({id:userId},{count})
      };
      const products:number[] = user.products.filter((i:number)=>i !== prodId);
      const count:number[] = user.count
      .filter((_:number,idx:number)=>idx !== moreOne);
      return await this.users.update({id:userId},{products,count});
    }

    async clearProductBask(id:number):Promise<UpdateResult>{
      return await this.users.update({id},{products:[],count:[]});
    }

    async getUserBask(id:number):Promise<UserBask[]>{
      const user:UserDto = await this.users.findOneBy({id});
      const products:ProductDto[] = await this.products.find();
      return user.products.map((i:number,idx:number)=>{
        const product:ProductDto = products
        .find((el:ProductDto)=>el.id == i);
        return {
          count:user.count[idx],
          product:product
        }
      });
    }
}