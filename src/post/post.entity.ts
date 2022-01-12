import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    author: string;

    @Column()
    publish: string;

    @Column()
    postArticle: string;
}
