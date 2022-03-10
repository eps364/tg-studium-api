import { InputType } from '@nestjs/graphql'

@InputType()
export class CreatePostInput {
    postTitle: string

    postBody: string

    postStatus: number

    postImageURL: string

    category: string

    tags: string

    postVisibility: number

    postDateTime: Date
}
