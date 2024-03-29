import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TestUser } from "src/database/user.entity";
import { UserAuth, UserBody, UserDto } from "src/dto/user.dto";
import { Repository } from "typeorm";
import * as bc from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(TestUser) private readonly users:Repository<TestUser>
    ){}

    async getUser(id:number):Promise<UserDto>{
      return await this.users.findOneBy({id});
    }

    addUser({ name , pass:p }:UserBody):Promise<TestUser>{
      const pass:string = bc.hashSync(p,10);
      const data:Omit<UserDto,"id"> = {name,pass,products:[],count:[]};
      const user:TestUser = this.users.create(data);
      return this.users.save(user);
    }

     async checkUser({name,pass,isLogin}:UserBody):Promise<UserAuth>{
      const users:UserDto[] = await this.users.find();
      const user:UserDto = users.find((i:UserDto)=>(
        i.name == name && bc.compare(pass,i.pass)
      ));
      return {
        user,
        success:Boolean(user) == isLogin
      }
    }
}