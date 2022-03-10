import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateCommentInput {
    postId: number

    userId: string

    commentBody: string
}
