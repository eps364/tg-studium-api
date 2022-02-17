import { FilterableField } from '@nestjs-query/query-graphql'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Post')
export class PostDTO {
    @Field()
    id: string

    @FilterableField()
    title: string

    @FilterableField()
    description: string

    @FilterableField()
    author: string

    @FilterableField()
    publish: string

    @FilterableField()
    postArticle: string
}
