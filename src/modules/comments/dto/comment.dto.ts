import { FilterableField } from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'

@ObjectType('Comments')
export class CommentDTO extends BaseDTO {
    @FilterableField()
    postId: string

    @FilterableField()
    userId: string

    @FilterableField()
    commentBody: string
}
