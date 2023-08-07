import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./article.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nom: string;

    @OneToMany(() => Article, article => article.user)
    articles: Article[];
}