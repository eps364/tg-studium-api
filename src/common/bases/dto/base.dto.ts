import { FilterableField } from '@nestjs-query/query-graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class BaseDTO {
    @FilterableField({
        allowedComparisons: ['eq', 'neq', 'in', 'notIn'],
        nullable: true,
    })
    id: string

    @FilterableField({
        allowedComparisons: ['eq', 'neq', 'in', 'notIn'],
        nullable: true,
    })
    createdAt?: Date

    @FilterableField({
        allowedComparisons: ['eq', 'neq', 'in', 'notIn'],
        nullable: true,
    })
    updatedAt?: Date

    @FilterableField({
        allowedComparisons: ['eq', 'neq', 'in', 'notIn'],
        nullable: true,
    })
    deletedAt?: Date
}
