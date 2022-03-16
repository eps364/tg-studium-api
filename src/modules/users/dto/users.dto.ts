import {
    FilterableField,
    FilterableOffsetConnection,
} from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'
import { PostDTO } from 'src/modules/posts/dto/posts.dto'

@ObjectType('User')
@FilterableOffsetConnection('posts', () => PostDTO, {
    nullable: false,
})
export class UserDTO extends BaseDTO {
    @FilterableField()
    userName: string

    @FilterableField()
    userEmail: string

    userPassword: string
}
