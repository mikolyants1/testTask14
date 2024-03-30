import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ProductDto } from './product.dto';
import { BaskDto } from './bask.dto';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsArray()
  products: BaskDto[];
}

export class UserBody {
  name: string;
  password: string;
  isLogin?: boolean;
}

export class UserAuth {
  user: UserDto | undefined;
  success: boolean;
}

export class UserBask {
  product: ProductDto;
  count: number;
}