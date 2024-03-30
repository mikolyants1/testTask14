import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestProduct } from 'src/database/product.entity';
import { TestUser } from 'src/database/user.entity';
import { TestBask } from "src/database/bask.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TestProduct, TestUser, TestBask])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}