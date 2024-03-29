import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { TestProduct } from "src/database/product.entity";
import { TestUser } from "src/database/user.entity";

export const PgConfig = ():TypeOrmModuleAsyncOptions => ({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory:(service:ConfigService)=>({
    type:"postgres",
    database:service.get("DB_NAME"),
    username:service.get("DB_USERNAME"),
    port:service.get("DB_PORT"),
    host:service.get("DB_HOST"),
    password:service.get("DB_PASS"),
    entities:[TestProduct,TestUser],
    synchronize: true
  })
})