import {
    FilterableField,
    FilterableRelation,
} from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'
import { UserDTO } from 'src/modules/users/dto/users.dto'

@ObjectType('Post')
@FilterableRelation('user', () => UserDTO)
export class PostDTO extends BaseDTO {
    @FilterableField()
    title: string

    @FilterableField()
    description: string

    @FilterableField()
    author: string

    @FilterableField()
    publish: Date

    @FilterableField()
    postArticle: string
}
