import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestUser } from "src/database/user.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
  imports:[
    TypeOrmModule.forFeature([TestUser])
  ],
  controllers:[UserController],
  providers:[UserService]
})
export class UserModule {}