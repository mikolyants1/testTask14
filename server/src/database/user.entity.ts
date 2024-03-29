import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TestUser {
   @PrimaryGeneratedColumn("increment")
   id:number;

   @Column("text",{nullable:false})
   name:string;

   @Column("text",{nullable:false})
   pass:string;

   @Column("integer",{array:true})
   products:number[];

   @Column("integer",{array:true})
   count:number[]
}