import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'

@ObjectType('Post')
export class PostDTO extends BaseDTO {
    postTitle: string

    postBody: string

    postStatus: number

    postImageURL: string

    category: string

    tags: string

    postVisibility: number

    postDateTime: Date
}
