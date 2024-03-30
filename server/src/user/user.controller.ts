import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserAuth, UserBody, UserDto } from 'src/dto/user.dto';
import { TestUser } from 'src/database/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<UserDto> {
    return this.service.getUser(id);
  }

  @Post()
  addUser(@Body() body: UserBody): Promise<TestUser> {
    return this.service.addUser(body);
  }

  @Post('check')
  async checkUser(@Body() body: UserBody): Promise<UserAuth> {
    return this.service.checkUser(body);
  }
}