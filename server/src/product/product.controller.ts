import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from "./product.service";
import { ProdBody, ProductDto} from "src/dto/product.dto";
import { UserBask } from "src/dto/user.dto";
import { TestBask } from 'src/database/bask.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  async getProducts(): Promise<ProductDto[]> {
    return this.service.getProducts();
  }

  @Post()
  async addProductToBask(@Body() body: ProdBody):Promise<TestBask> {
    return this.service.addProductToBask(body);
  }

  @Delete("bask/:id")
  async delFromBask(
    @Param("id",ParseIntPipe) productId:number,
    @Query("userId") userId:string
  ):Promise<TestBask>{
    return this.service.delProductFromBask({userId,productId});
  }

  @Delete("clear")
  async clearBask(@Query("userId") id:string):Promise<TestBask>{
    return this.service.clearProductBask(id);
  }

  @Get("bask/:id")
  async getBask(@Param("id") id:string):Promise<UserBask[]>{
    return this.service.getUserBask(id);
  }
}
