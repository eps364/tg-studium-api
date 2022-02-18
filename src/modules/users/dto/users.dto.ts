import {
    FilterableField,
    FilterableOffsetConnection,
} from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'
import { PostDTO } from 'src/modules/posts/dto/posts.dto'

@ObjectType('User')
@FilterableOffsetConnection('posts', () => PostDTO, {
    nullable: true,
})
export class UserDTO extends BaseDTO {
    @FilterableField()
    name: string

    @FilterableField()
    email?: string
}
