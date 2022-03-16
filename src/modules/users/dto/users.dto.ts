import { FilterableField } from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'
import { BaseDTO } from 'src/common/bases/dto/base.dto'

@ObjectType('User')
export class UserDTO extends BaseDTO {
    @FilterableField()
    userName: string

    @FilterableField()
    userEmail: string

    userPassword: string
}
