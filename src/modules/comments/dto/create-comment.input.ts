import { FilterableRelation } from '@nestjs-query/query-graphql'
import { InputType } from '@nestjs/graphql'
import { PostDTO } from 'src/modules/posts/dto/posts.dto'

@InputType()
@FilterableRelation('post', () => PostDTO)
export class CreateCommentInput {
    postId: number

    userId: string

    commentBody: string
}
