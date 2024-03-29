import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProdBody, ProductDto} from "src/dto/product.dto";
import { UpdateResult } from "typeorm";
import { UserBask } from "src/dto/user.dto";

@Controller("products")
export class ProductController {
    constructor(private readonly service:ProductService){}

    @Get()
    async getProducts():Promise<ProductDto[]>{
      return await this.service.getProducts();
    }

    @Post()
    async addProductToBask(@Body() body:ProdBody):Promise<UpdateResult>{
      return await this.service.addProductToBask(body);
    }

    @Delete("bask/:id")
    async delFromBask(
      @Param("id",ParseIntPipe) prodId:number,
      @Query("userId",ParseIntPipe) userId:number
    ):Promise<UpdateResult>{
      return await this.service.delProductFromBask(userId,prodId);
    }

    @Delete("clear")
    async clearBask(
      @Query("userId",ParseIntPipe) id:number
    ):Promise<UpdateResult>{
      return await this.service.clearProductBask(id);
    }

    @Get("bask/:id")
    async getBask(
      @Param("id",ParseIntPipe) id:number
    ):Promise<UserBask[]>{
      return await this.service.getUserBask(id);
    }
}
