import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
@Entity()
export class Article{
 @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
 titre:string;

 @ Column()
 description:string;
  
 @Column()
 userId: number;

 @ManyToOne(() => User, user => user.articles)
 @JoinColumn({name:"userId"})
 user: User;
}