import { FilterableField } from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'

@ObjectType('Post')
export class PostDTO extends BaseDTO {
    @FilterableField()
    postTitle: string

    @FilterableField()
    postBody: string

    @FilterableField()
    postStatus: number

    @FilterableField()
    postImageURL: string

    @FilterableField()
    category: string

    @FilterableField()
    tags: string

    @FilterableField()
    postVisibility: number

    @FilterableField()
    postDateTime: Date
}
