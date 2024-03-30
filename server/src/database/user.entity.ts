import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TestBask } from "./bask.entity";

@Entity()
export class TestUser {
   @PrimaryGeneratedColumn("uuid")
   id:string;

   @Column("text",{nullable:false})
   name:string;

   @Column("text",{nullable:false})
   password:string;

   @OneToMany(()=>TestBask,(prod:TestBask)=>prod.user)
   products:TestBask[];

}