import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  imageCover: string;

  @IsNumber()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  rating: number;
}

export class ProdBody {
  userId: string;
  productId: number;
}