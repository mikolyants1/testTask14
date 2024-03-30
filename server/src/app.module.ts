import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PgConfig } from './config/pg.config';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './src/.env',
    }),
    TypeOrmModule.forRootAsync(PgConfig()),
    UserModule,
    ProductModule
  ],
})
export class AppModule {}
