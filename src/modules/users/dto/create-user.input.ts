import { FilterableField } from '@nestjs-query/query-graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class CreateUserInput {
    @FilterableField()
    userName: string

    @FilterableField()
    userEmail: string

    userPassword: string
}
