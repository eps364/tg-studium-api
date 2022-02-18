import { InputType } from '@nestjs/graphql'

@InputType()
export class CreatePostInput {
    title: string

    description: string

    author: string

    publish: Date

    postArticle: Date
}
