import {
    FilterableField,
    FilterableRelation,
} from '@nestjs-query/query-graphql'
import { InputType } from '@nestjs/graphql'
import { UserDTO } from 'src/modules/users/dto/users.dto'

@InputType()
@FilterableRelation('user', () => UserDTO, {
    nullable: true,
})
export class CreatePostInput {
    postTitle: string

    postBody?: string

    postStatus?: number

    postImageURL?: string

    category?: string

    tags?: string

    postVisibility?: number

    postDateTime?: Date

    // @Field(() => UpdateUserInput)
    // user?: UpdateUserInput
    @FilterableField()
    userId: string
}
