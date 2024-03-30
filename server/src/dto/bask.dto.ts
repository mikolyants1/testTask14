import { IsNotEmpty, IsNumber } from "class-validator";
import { TestUser } from "src/database/user.entity";

export class BaskDto {
    @IsNumber()
    @IsNotEmpty()
    bask_id:number;

    @IsNumber()
    @IsNotEmpty()
    productId:number;

    @IsNumber()
    @IsNotEmpty()
    count:number;

    user:TestUser
}

export class ColumnConfig<T> {
    key:string;
    table:T
  }