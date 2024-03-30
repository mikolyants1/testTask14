import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TestUser } from "./user.entity";

@Entity()
export class TestBask {
  @PrimaryGeneratedColumn({name:"bask_id"})
  bask_id:number;

  @Column("integer",{nullable:false})
  productId:number;

  @Column("integer",{nullable:false})
  count:number;

  @ManyToOne(()=>TestUser,(user:TestUser)=>user.products)
  user:TestUser;
}
