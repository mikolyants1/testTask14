import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { TestBask } from "src/database/bask.entity";
import { TestProduct } from "src/database/product.entity";
import { TestUser } from "src/database/user.entity";

export const PgConfig = ():TypeOrmModuleAsyncOptions => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory:(service:ConfigService)=>({
    type: 'postgres',
    database:service.get("DB_NAME"),
    username:service.get("DB_USERNAME"),
    port:service.get("DB_PORT"),
    host:service.get("DB_HOST"),
    password:service.get("DB_PASS"),
    entities:[TestBask,TestProduct,TestUser],
    synchronize: true
  })
})