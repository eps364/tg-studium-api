import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'

@ObjectType('Comments')
export class CommentDTO extends BaseDTO {
    postId: string

    userId: string

    commentBody: string
}
