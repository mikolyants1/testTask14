import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TestUser } from "src/database/user.entity";
import { UserAuth, UserBody, UserDto } from "src/dto/user.dto";
import { Repository } from "typeorm";
import * as bc from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(TestUser)
      private readonly users:Repository<TestUser>
    ){}

    async getUser(id:string):Promise<UserDto>{
      return this.users.findOneBy({id});
    }

  addUser({ name, password }: UserBody): Promise<TestUser> {
    const pass: string = bc.hashSync(password, 10);
    const data: Omit<UserDto, 'id'|'products'> = {
      name,
      password:pass
    };
    const user: TestUser = this.users.create(data);
    return this.users.save(user);
  }

  async checkUser({ name, password, isLogin }: UserBody): Promise<UserAuth> {
    const users: UserDto[] = await this.users.find();
    const user: UserDto = users.find((i: UserDto) => (
      i.name == name && bc.compare(password, i.password)
    ));
    return {
      user,
      success:Boolean(user) == isLogin
    }
  }
}