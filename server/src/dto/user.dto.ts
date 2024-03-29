import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ProductDto } from './product.dto';

export class UserDto {
    @IsNumber()
    @IsNotEmpty()
    id:number;

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    pass:string;

    @IsArray()
    products:number[];

    @IsArray()
    count:number[];
}

export class UserBody {
   name:string;
   pass:string;
   isLogin?:boolean;
}

export class UserAuth {
    user:UserDto|undefined;
    success:boolean
}

export class UserBask {
    product:ProductDto;
    count:number
}