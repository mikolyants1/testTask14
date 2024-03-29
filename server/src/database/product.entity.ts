import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TestProduct {
   @PrimaryGeneratedColumn("increment")
   id:number;

   @Column("text",{nullable:false})
   title:string;

   @Column("text",{nullable:false})
   image:string;

   @Column("integer",{nullable:false})
   price:number;

   @Column("integer",{nullable:false})
   rating:number;
}