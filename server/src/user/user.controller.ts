import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserAuth, UserBody, UserDto } from "src/dto/user.dto";
import { TestUser } from "src/database/user.entity";

@Controller("user")
export class UserController {
    constructor(private readonly service:UserService){}

    @Get(":id")
    async getUser(
      @Param("id",ParseIntPipe) id:number
    ):Promise<UserDto>{
      return await this.service.getUser(id);
    }

    @Post()
    addUser(@Body() body:UserBody):Promise<TestUser>{
      return this.service.addUser(body);
    }

    @Post("check")
    async checkUser(@Body() body:UserBody):Promise<UserAuth>{
      console.log(body)
      return await this.service.checkUser(body);
    }
}