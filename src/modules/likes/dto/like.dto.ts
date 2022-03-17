import {
    FilterableField,
    FilterableRelation,
} from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'
import { PostDTO } from 'src/modules/posts/dto/posts.dto'

@ObjectType('Like')
@FilterableRelation('post', () => PostDTO)
export class LikeDTO extends BaseDTO {
    @FilterableField()
    userId: string

    @FilterableField()
    postId: string
}
