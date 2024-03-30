import { Max, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TestProduct {
   @PrimaryGeneratedColumn("increment")
   id:number;

   @Column("text",{nullable:false})
   title:string;

   @Column("text",{nullable:false})
   imageCover:string;

   @Column("integer",{nullable:false})
   price:number;

   @Column("integer",{nullable:false})
   @Min(1)
   @Max(5)
   rating:number;

}