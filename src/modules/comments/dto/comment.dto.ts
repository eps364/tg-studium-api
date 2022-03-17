import {
    FilterableField,
    FilterableRelation,
} from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'
import { PostDTO } from 'src/modules/posts/dto/posts.dto'

@ObjectType('Comments')
@FilterableRelation('post', () => PostDTO)
export class CommentDTO extends BaseDTO {
    @FilterableField()
    postId: string

    @FilterableField()
    userId: string

    @FilterableField()
    commentBody: string
}
